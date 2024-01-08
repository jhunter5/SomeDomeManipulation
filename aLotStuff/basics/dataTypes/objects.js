// an object is a collection of properties

let user = {
    userName: "jhunter",
    age: 21,
    itsStudent: true,
    gender: "Male",
    degree: "Computer Science",   
}

console.log(user.degree)

user.grade = 4.5 // You can add new properties to an object like this

console.log(user)

delete user.grade // You can delete properties from an object like this

user["age"] = 22 // You can also use brackets to access properties

console.log(user)


let user2 = {
    ["user name"]: "gabriel",
    age: 21,
}   

console.log(user2)


console.log("age" in user2) // This will return true

console.log(user.__proto__) 
