//------------------EDGE CASES----------------//
//typeof is a type guard
//type narrowing
function detectType(val: number | string ){
    if (typeof val === "string") {
        return val.toLowerCase()
    }
    return val + 3
}

function provideId(id: string | null){
    if(!id){
        console.log("Please provide ID");
        return
    }
    id.toLowerCase()
}


function printAll(strs: string | string[] | null) {
    
    if (strs) {
      if (typeof strs === "object") {
        for (const s of strs) {
          console.log(s);
        }
      } else if (typeof strs === "string") {
        console.log(strs);
      }
    }
  }


interface User {
    name: string,
    email: string
}

interface Admin{
    name: string,
    email: string,
    isAdmin: boolean
}

function isAdminAccount(account: User | Admin){
    if ("isAdmin" in account) {
        return account.isAdmin
    }
}

//---------------------instanceof----------------------------------------//

function logValue(x: Date | string) {
    if (x instanceof Date) {
      console.log(x.toUTCString());        
    } else {
      console.log(x.toUpperCase());                
    }
  }


type Fish = {swim: () => void};
type Bird = {fly: () => void};

function isFish(pet: Fish | Bird): pet is Fish{
    return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird){
    if (isFish(pet)) {
        pet
        return "fish food"
    } else {
        pet
        return "bird Food"
    }
}

//-----------------------------------------------------//

interface Circle {
    kind: "circle",
    radius: number
}

interface Square {
    kind: "square"
    side: number
}

interface Rectangle {
    kind: "rectangle",
    length: number,
    width: number
}

type Shape = Circle | Square | Rectangle

function getTrueShape(shape: Shape){
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2
    }
    //return shape.side * shape.side
}

//exhaustive checking

function getArea(shape: Shape){
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius ** 2

        case "square":
            return shape.side * shape.side
        case "rectangle":
            return shape.length * shape.width

        default:       //should be there
            const _defaultforshape: never = shape
            return _defaultforshape
    }
}


/*
**Type narrowing** in TypeScript is a way of refining a more general type to a more specific type, based on the context or conditions you apply to it. TypeScript uses control flow analysis to understand types and determine what specific type a variable has at a certain point in code. This lets you access properties and methods safely, based on the narrowed-down type.

### Common Type Narrowing Techniques

1. **`typeof` check** - Useful for primitive types like `string`, `number`, `boolean`.
   ```typescript
   function printLength(value: string | number) {
     if (typeof value === "string") {
       console.log(value.length); // TypeScript knows value is a string here
     } else {
       console.log(value); // TypeScript knows value is a number here
     }
   }
   ```

2. **`instanceof` check** - Useful for narrowing down classes and objects.
   ```typescript
   class Dog {
     bark() {
       console.log("Woof!");
     }
   }

   class Cat {
     meow() {
       console.log("Meow!");
     }
   }

   function makeSound(animal: Dog | Cat) {
     if (animal instanceof Dog) {
       animal.bark(); // TypeScript knows animal is a Dog here
     } else {
       animal.meow(); // TypeScript knows animal is a Cat here
     }
   }
   ```

3. **Discriminated Unions** - Commonly used with objects that have a common property, like a `type` field.
   ```typescript
   type Circle = { type: "circle"; radius: number };
   type Square = { type: "square"; sideLength: number };

   function getArea(shape: Circle | Square) {
     if (shape.type === "circle") {
       return Math.PI * shape.radius ** 2;
     } else {
       return shape.sideLength ** 2;
     }
   }
   ```

4. **Truthiness Checks** - Checking if a value is `null` or `undefined`.
   ```typescript
   function printValue(value: string | null) {
     if (value) {
       console.log(value); // TypeScript knows value is a string
     } else {
       console.log("No value provided");
     }
   }
   ```

These techniques help you write safer code by leveraging TypeScript's ability to recognize types based on context, allowing for better auto-completion and error prevention.
*/