// primitive data types are the most basic data types available within the JavaScript language. They are
// inmutable, which means that they cannot be changed. There are 6 primitive data types:

// 1. String
let userName = "jhunter"

// 2. Number

let age = 21
console.log(Number.MAX_SAFE_INTEGER) // This is the maximum number that JavaScript can handle without losing precision
console.log(Number.MIN_SAFE_INTEGER)

let pi = 3.1416
let justInt = 3
console.log(typeof(pi))
console.log(typeof(justInt)) // There is no difference between int and float in JavaScript

console.log(+0 === -0) // This is true
console.log(42 / +0); // Infinity
console.log(42 / -0); // -Infinity
console.log(Infinity === -Infinity) // This is false




// 3. Boolean

let itsStudent = true

// 4. Null
let bankAccount = null

// 5. Undefined
let goodknowOfJavaScript = undefined

// 6. Symbol

// Symbols are used to create unique identifiers for objects. They are created using the Symbol() function.

let id = Symbol("id")
let id2 = Symbol("id")
console.log(id === id2) // This is false, because symbols are unique

