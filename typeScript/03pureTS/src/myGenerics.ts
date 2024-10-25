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

const score: Array<number> = []
const names:Array<string> = []

function identityOne(val: boolean | number): boolean | number{
    return val
}

function identityTwo(val: any):any{
    return val
}

function identityThree<Type>(val: Type): Type {
    return val
}

// identityThree(true)

function identityFour<T>(val: T): T {
    return val
}

interface Bootle{
    brand: string,
    type: number
}
// identityFour<Bootle>({}) // ==> using our own types



function getSearchProducts<T>(products: T[]): T {
    // do some database operations
    const myIndex = 3
    return products[myIndex]
}

//arrow function syntax
const getMoreSearchProducts = <T,>(products: T[]): T => {
    //do some database operations //"," used to show that its generic
    const myIndex = 4
    return products[myIndex]
}


// -------------------------------------//
interface Database {
    connection: string,
    username: string,
    password: string
}

function anotherFunction<T, U extends Database>(valOne:T, valTwo:U):object {
    return{
        valOne,
        valTwo
    }
}

// anotherFunction(3, {})

//------------------------------------//

//class types in generics

interface Quiz{
    name: string,
    type: string
}

interface Course{
    name: string,
    author: string,
    subject: string
}

class Sellable<T>{
    public cart: T[] = []

    addToCart(product: T){
        this.cart.push(product)
    }
}