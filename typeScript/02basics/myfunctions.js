"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
addTwo(5);
getUpper("shoaib");
signUpUser("shoaib", "msk21.com", true);
loginUser("im", "jhk.com");
//<!----------------------->
//more than 1 type returned
/*
function getValue(myVal: number): boolean{
    if(myVal > 5) {
        return true
    }
    return "200 ook"
}
*/
//arrow function syntax
var getHello = function (s) {
    return "";
};
var heroes = ["thor", "spiderman"];
//const heroes = [1,2,3]
heroes.map(function (heroes) {
    return "hero is ".concat(heroes);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
//void type means it returns nothing(only writes error)
function handleError(errmsg) {
    throw new Error(errmsg);
}
