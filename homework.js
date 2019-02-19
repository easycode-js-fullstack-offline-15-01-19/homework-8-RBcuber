// -------------------------- Home work 8 --------------------------
// -------------------------- Кириченко Игорь --------------------------


// 1. Создать объект, который описывает ширину и высоту
// прямоугольника, а также может посчитать площадь фигуры:
// const rectangle = {width:..., height:..., getSquare:...};


const rectangle = {
    width: 7,
    height: 8,
    getSquare: function () {
        return this.width * this.height;
    }
};



// 2. Создать объект, у которого будет цена товара и его скидка, а также
// два метода: для получения цены и для расчета цены с учетом скидки:


const price = {
	price: 10,
	discount: '15%',
	getPrice: function() {return this.price},
	getPriceWithDiscount: function() { 
		return (this.price - this.price * parseFloat(this.discount) / 100); 
	}
};



// 3. Создать объект, у которого будет поле высота и метод “увеличить
// высоту на один”. Метод должен возвращать новую высоту:
// object.height = 10;
// object.inc(); // придумать свое название для метода
// object.height; // 11;



const higher = {
	height: 10,
	getHigher: function() {
		return this.height = this.height + 1;
	}
};




// 4. Создать объект “вычислитель”, у которого есть числовое свойство
// “значение” и методы “удвоить”, “прибавить один”, “отнять один”.
// Методы можно вызывать через точку, образуя цепочку методов:


const numerator = {
    value: 1,
    double: function () { 
        this.value = this.value * 2;
         return this; 
    },
    plusOne: function () { 
        this.value = this.value + 1; 
        return this; 
    },
    minusOne: function () { 
        this.value = this.value - 1;
         return this;
    }
};


// 5. Создать объект с розничной ценой и количеством продуктов. 
// Этот объект должен содержать метод для получения общей стоимости всех товаров (цена * количество продуктов)



const products = {
	price: 140,
	number: 8,
    getTotalPriceProducts: function () {
		return this.price * this.number;
	}
};

// 6. Создать объект из предыдущей задачи. Создать второй объект,
// который описывает количество деталей и цену за одну деталь. Для
// второго объекта нужно узнать общую стоимость всех деталей, но
// нельзя создавать новые функции и методы. Для этого
// “позаимствуйте” метод из предыдущего объекта.


const details = {
	price: 15,
    number: 72
};


const getTotalPriceDetails = products.getTotalPriceProducts.bind(details);



// 7. Даны объект и функция:
// let sizes = {width: 5, height: 10},
// getSquare = function () {return this.width * this.height};
// Не изменяя функцию или объект, получить результат функции
// getSquare для объекта sizes


let sizes = {
    width: 5,
    height: 10
};

getSquare = function () {
    return this.width * this.height;
};

    let result = getSquare.call(sizes);

// 8. Измените функцию getElementHeight таким образом, чтобы можно было вызвать getElementHeight() и получить 25.
let element = {
    height: 25,
    getHeight: function () {return this.height;}
};

let getElementHeight = element.getHeight.bind(element);


// 9. Создайте функцию которая бы умела делать:
// minus(10)(6); // 4
// minus(5)(6); // -1
// minus(10)(); // 10
// minus()(6); // -6
// minus()(); // 0

function minus(a = 0) {
	return function (b = 0) {
		return a - b;
	}
}

minus(2)(5); // -3



// 10. Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:


function multiplyMaker(x) {
	return 	function (y) {
		x = x * y;
		return x;
	}
}

const multiply = multiplyMaker(2);



// 3. Реализовать модуль, который работает со строкой и имеет методы:
// a. установить строку
// i. если передано пустое значение, то установить пустую строку
// ii. если передано число, число привести к строке
// b. получить строку
// c. получить длину строки
// d. получить строку-перевертыш



const stringModule  = {
	str: '',

	setStr: function (str2) {
		if (!str2) {
			str = '';
		} else if (typeof(str2) === 'number') {
			str = str2 + '';
		} else {
			str = str2;
		}

		return str;
	},

    getStr: function () { return str; },
    
    getStrLength: function () { return str.length; },
    
	getStrReverse: function () { return str.split("").reverse().join(""); }
};


// 12. Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и возводить в степень.
// Конечное значение округлить до двух знаков после точки (значение должно храниться в обычной переменной, не в this).
const calc = {
	value: 0,

	setValue: function (value1) {
		if (!value1) {
			value = 0;
		} else if (typeof(value1) != 'number') {
			alert('Введите число');
		} else {
			value = value1;
		}

		return calc;
	},

	valuePlus: function (plus) { 
        value += plus; 
        
    	return calc; 
	},

	valueMinus: function (minus) { 
        value -= minus; 
        
		return calc; 
	},

	valueMultiply: function (mult) { 
        value *= mult; 
        
		return calc; 
	},

	valueSplit: function (split) { 
        value /= split; 
        
		return calc; 
	},

	valuePower: function (deg) { 
        value = Math.pow(value, deg); 
        
		return calc; 
	},

	getValue: function () { 
		value = parseFloat(value.toFixed(2)); 
        console.log(value);
        
		return calc; 
	}

};