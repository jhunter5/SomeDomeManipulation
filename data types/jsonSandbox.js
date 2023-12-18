function User(username, password, email, admin){
    this.username = username
    this.password = password
    this.email = email
    this.admin = admin
}

let users = new Map()
users.set('Juan', new User('Juan', '123', 'juan@gmail.com', true))
users.set('Hunter', new User('Hunter', '456', 'hunter@gmail.com', false))


function printUsers(map){
    for (let user of map.values()){
        console.log(JSON.stringify(user, ['username', 'email'], 2))
    }
}

printUsers(users)

let messageFromServer = `{"username": "Gabriela", "password": "123213", "email": "Gabrielita@gmail.com", "admin": false}`

users.set(JSON.parse(messageFromServer).username, JSON.parse(messageFromServer))
console.log("Final: ")
printUsers(users)


