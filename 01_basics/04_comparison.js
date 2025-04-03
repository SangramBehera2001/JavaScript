console.log("2" > 1);  //true
console.log("02" > 1);  //true

console.log(null > 0);  //false
console.log(null == 0);  //false
console.log(null >= 0);  //true

console.log(undefined > 0);  //false
console.log(undefined == 0);  //false
console.log(undefined < 0);  //false
console.log(undefined >= 0); //false

//An Equality check(==) and comparison(<, >, >=, <=) works differently in javascript
//comparison operators converts null to number, treating it as zero
//So, null >= 0 gives true and null > 0 gives false

console.log("2" == 2);  //true
console.log("2" === 2);  //false



