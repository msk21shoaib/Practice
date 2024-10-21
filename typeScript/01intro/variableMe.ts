let greetings: string = "Hello Shoaib";
greetings.toLowerCase();

console.log(greetings);

//NUMBER
let userId: number = 334455.2

//better approach => not using ": number" when it's obvious
let usersId = 2435.7
usersId.toFixed();

//BOOLEAN
let isLoggedIn: boolean = false;

//ANY => not a type its kind of a marker that says anything is allowed
let hero;

function getHero(){
    return 'Thor'
}

export {}