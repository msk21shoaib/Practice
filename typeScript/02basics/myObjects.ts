// const User = {
//     name: "hitesh",
//     email: "hitesh@lco.dev",
//     isActive: true
// }

// function createUser({name: string, isPaid: boolean}){}

// createUser({name: "shoaib", isPaid: false}) //input object

// let newUser = {name: "shoaib", isPaid: false, email: "h@h.com"}
// createUser(newUser)          //here we are sending email even when it isnt specified 
/* another way */


//to return objects
function createCourse(): {name: string, price: number}{
    return {name:"reactjs", price:399}
}

/*TYPE ALIASES are a way to create custom names for types. They allow you to define a new name for an existing type, making your code more readable and reusable
type Users = {
    name: string;
    email: string,
    isActive: boolean
}

function createUsers(user: Users){
    return {name: "", email: "", isActive: true}
}

createUsers({name: "", email: "", isActive: true})
*/

//READ ONLY(readonly keyword makes a property immutable, meaning it can only be assigned a value once (either at initialization or in the constructor) and cannot be changed thereafter) & OPTIONAL(he ? symbol marks a property as optional, meaning it may or may not be defined when creating an object)

type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    credcardDetails?: number
}

let myUser: User = {
    _id: "1245",
    name: "h",
    email: "h@h.com",
    isActive: false
}

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

//combining two types and an object as one
type cardDetails = cardNumber & cardDate & {
    cvv: number
}


export {}