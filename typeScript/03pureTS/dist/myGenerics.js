"use strict";
/*
GENERICS allow you to create reusable components that work with different types while maintaining type safety
----------Eg:-------------------
function identity<T>(value: T): T {
  return value;
}
const number = identity<number>(42);    // T is number
const text = identity<string>("hello"); // T is string
-------------------------------
Generics let you specify a placeholder type that can be substituted with actual types when you use the function, class, or interface.
*/
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
// identityThree(true)
function identityFour(val) {
    return val;
}
// identityFour<Bootle>({}) // ==> using our own types
function getSearchProducts(products) {
    // do some database operations
    const myIndex = 3;
    return products[myIndex];
}
//arrow function syntax
const getMoreSearchProducts = (products) => {
    //do some database operations //"," used to show that its generic
    const myIndex = 4;
    return products[myIndex];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
