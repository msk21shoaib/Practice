// const user: (string | number)[] = [1, "hc"]
//tuples are a type that allows you to express an array with a fixed number of elements, where each element may have a different type. SEQUENCING IS IMPORTANT
let tUser: [string, number, boolean]

tUser = ["hc", 131, true]

let rgb: [number, number, number] = [255, 123, 112]

type User = [number, string]

const newUser: User = [112, "example@google.com"]

newUser[1] = "hc.com"
// newUser.push(true)










export {}