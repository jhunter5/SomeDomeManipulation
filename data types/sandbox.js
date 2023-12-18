// all the primitive data types in js could be wrapped in an object

let number = 5.23834
console.log(number.toFixed(2)) // acces a methd in a primitive??? wtf

let string = "hello"
console.log(string.toUpperCase()) // acces a methd in a primitive??? wtf

// they are not really primitives, they are objects with methods and properties

// large numbers, scientific notation

let billion = 1_000_000_000
let billion2 = 1e9
let small = 1e-6

let binary = 0b11111111
let octal = 0o377

let stringflyNumber = '20000 pesos'

let numericValueOfString = parseInt(stringflyNumber)
console.log(numericValueOfString)
console.log(typeof numericValueOfString)


let myName = "Juan Hunter Malaver"
console.log(myName.length)
console.log(myName[0])
console.log(myName.at(-1))

console.log("Z".localeCompare("Z"))


let reverse = function(s){
    return s.split("").reverse().join("");
}

console.log(reverse("rcne"))
