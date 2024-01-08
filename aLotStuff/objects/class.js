class Person {
    _beingAlive = true

    constructor(name, age) {
        this.name = name
        this._age = age
    }

    sayhi () {
        console.log(`Hi, my name is ${this.name}`)
    }

    get age () {
        return this._age
    }

    get beingAlive () {
        return this._beingAlive
    }

    growUp () {
        this._age++
    }

    die () {
        this._beingAlive = false
    }
}


class Student extends Person {
    constructor(name, age, grade) {
        super(name, age)
        this.grade = grade
    }
}

let juan = new Person("Juan", 20);
console.log(juan)

let esteban = new Student("Esteban", 20, 10);
esteban.sayhi()

console.log(esteban.beingAlive)
esteban.die()
console.log(esteban.beingAlive)
// console.log(esteban.age)
// esteban.age = 30
// console.log(esteban.age)
// esteban.growUp()
// console.log(esteban.age)

// console.log(esteban instanceof Student)