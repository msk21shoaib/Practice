//a UNION type allows a variable to hold values of different types(more than two also)
//Syntax :-
var score = 33;
score = 44;
score = "55";
//making union of two types
var hitesh = { name: "hitesh", id: 334 };
hitesh = { username: "hc", id: 334 };
// function getDbId(id: number | string){
//     //making some API calls
//     console.log(`DB id is: ${id}`);
// }
getDbId(3);
getDbId("3");
function getDbId(id) {
    if (typeof id === "string") { //cant do without this check as it treats it as another type
        id.toLowerCase();
    }
}
//array 
var data = [1, 2, 3];
var data2 = ["1", "2", "3"];
var data3 = ["1", "2", 3, true]; //can be anything of 4
var data4 = [1, 2, 3, 4]; //all elements will be either string or number cant be  both
var seatAllotment;
seatAllotment = "aisle";
// seatAllotment = "crew" => this cant be done 
