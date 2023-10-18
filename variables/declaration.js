/**
 * This script demonstrates the use of variables and conditional statements in JavaScript.
 * Also pay attention to the scope, let name with juan is only available inside the else statement.
 */

// let let = "let" // This will throw an error because let is a reserved word
// var let = "let" // You can declare a variable with the name let but it is not recommended 

let name = 'John';
let x = 2

if ( x == 1) {
    name = "Restrepo"
    let secondName= "Homosexual"
    console.log(name)
    console.log(secondName)
} else {
    let name = "Juan"
    // let name = "Camilo" // This will throw an error because name is already defined
    console.log(name)
    
}
console.log(name)


const PI = 3.1416 // This is a constant variable, it cannot be changed
// PI = 3.1415 // This will throw an error
console.log(PI) // Use const for variables that you know will not change

const INCHES_TO_CM = 2.54 
let inches = 2.54
let cm = inches * INCHES_TO_CM
console.log(`${inches} inches are ${cm} cm`)

