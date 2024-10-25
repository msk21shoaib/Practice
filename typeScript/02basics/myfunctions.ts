function addTwo(num: number){   
    return num + 2;
}

function getUpper(val: string){
    return val.toUpperCase()
}

function signUpUser(name: string, email:string, isPaid:boolean) {}

let loginUser = (name: string, email:string, isPaid:boolean = false) => {}

addTwo(5)
getUpper("shoaib")

signUpUser("shoaib", "msk21.com",true)
loginUser("im","jhk.com")

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
const getHello = (s: string): string => {
    return ""
}

const heroes = ["thor", "spiderman"]
//const heroes = [1,2,3]

heroes.map((heroes): string => {
    return `hero is ${heroes}`
})

function consoleError(errmsg: string): void{
    console.log(errmsg);
}
//void type means it returns nothing(only writes error)

function handleError(errmsg: string): never{
    throw new Error(errmsg)
}
//The never type represents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of the program.(handles error internally)
export {}