//  Primitive
//*****************//

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n


// Reference (Non primitive)
//*********************************//

// Array, Objects, Functions

//Arrays
const heros = ["shaktiman", "naagraj", "doga"];

//Objects
let myObj = {
    name: "gudu",
    age: 24,
}

//Functions
const myFunction = function(){
    console.log("Hello");
}


console.log(typeof anotherId); //symbol
console.log(typeof myFunction);  //function
console.log(typeof heros);  //object
console.log(typeof myObj);  //object

myFunction();


// https://262.ecma-international.org/5.1/#sec-11.4.3