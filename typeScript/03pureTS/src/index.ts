// class User {
//     public email: string //allowed everywhere(default)
//     private name: string //only accessible in class
//     readonly city: string = "Jaipur" //it requires initializer as its a read only thing
//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name

//     }
// }

class User {

    protected _courseCount = 1 //available to this and all the inherited class
    
    readonly city: string = "Jaipur"
    constructor(
        public email: string, 
        public name: string,
        // private userId: string
        ){
    }

    get getAppleEmail(): string{
        return `apple${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }

    set courseCount(courseNum) { //no return type in setters
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum
    }
}

class SubUser extends User {
    isFamily: boolean = true
    changeCourseCount(){
        this._courseCount = 4
    }
}


const hitesh = new User("h@h.com","hitesh")