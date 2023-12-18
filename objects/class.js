class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
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
console.log(esteban)