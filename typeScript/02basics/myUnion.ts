//a UNION type allows a variable to hold values of different types(more than two also)
//Syntax :-

// let score: number | string = 33
// score = 44
// score = "55"


type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

//making union of two types
let shoaib: User | Admin = {name: "shoaib", id: 334}

shoaib = {username: "hc", id: 334}

// function getDbId(id: number | string){
//     //making some API calls
//     console.log(`DB id is: ${id}`);
    
// }
getDbId(3)
getDbId("3")

// function getDbId(id: number | string){
//     if (typeof id === "string") { //cant do without this check as it treats it as another type
//         id.toLowerCase()
//     }
  
// }

//array 

// const data: number[] = [1, 2, 3]
// const data2: string[] = ["1", "2", "3"]
// const data3: (string | number | boolean)[] = ["1", "2", 3, true]  //can be anything of 4
// const data4: string[] | number[] = [1,2,3,4] //all elements will be either string or number cant be  both

// let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
// seatAllotment = "crew" => this cant be done 