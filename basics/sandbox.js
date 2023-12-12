// console.log(2 + 2 + "2")

user = {
    name: "jhunter",
    age: 21,
}

console.log(user.__proto__)


let diego = {
    name: "diego",
    age: 21,
}

let santiago = diego

console.log(diego == santiago)


let a = 0
let b = "0"

console.log(a == b) // This is true
console.log(a === b) // This is false

let favoriteTeam = "Barcelona   "

let borusser = (favoriteTeam === "Borrusia Dortmund") ? "Yes" : "No"

console.log(borusser)

a = "c++"
b = "python"

let lenguage = a ?? b ?? "JavaScript"

console.log(lenguage)

// this is a function declaration
function giveRandomNumber() {
    return Math.random() * 10
}

for (let i = 0; i < 10; i++) {
    console.log(giveRandomNumber())
}

// this is a function expression    
let sayHi = function () {
    return "Hello"
}

console.log(sayHi == sayHi)


func