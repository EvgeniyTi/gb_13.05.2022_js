'use strict'

//es5 
function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDicount = function () {
    this.price = this.price / 1.25;

}

const products5 = new Product('греча', 1000);

products5.make25PercentDicount();
console.log(products5);


//es6

class Product1 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDicount1() {
        this.price = this.price / 1.25;
    }
}

const products = new Product1('греча', 1000);

products.make25PercentDicount1();
console.log(products);