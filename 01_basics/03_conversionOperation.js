//let score = 33
let score = "33abc"

console.log(typeof score) //string
//console.log(typeof(score))

let valueInNumber = Number(score)

console.log(typeof valueInNumber) //number => it is actually showing wrong as it is a string
console.log(valueInNumber) //NaN

//"33" => 33
//"33abc" => NaN
//true => 1 , false => 0
let isLoggged = true
console.log(typeof isLoggged) //boolean

let valueInNumber1 = Number(isLoggged)
console.log(valueInNumber1)  //1

let isLoggedIn = 1   //""  //"gudu"  

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn) // true

//1 => true, 0 => false
//"" => false
//"gudu" => true

let someNumber = 23
let stringNumber = String(someNumber)

console.log(stringNumber);  //23
console.log(typeof stringNumber);  //string



