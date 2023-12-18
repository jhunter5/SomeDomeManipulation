function Person (name, age) {
    this.name = name;
    this.age = age;
}

let participants = new Map();
participants.set(1, new Person("John", 20));
participants.set(2, new Person("Mary", 21));
participants.set(3, new Person("Alvaro", 15));

console.log("Participants: ")
for (let [id, person] of participants.entries()){
    console.log(`ID: ${id} - Name: ${person.name} - Age: ${person.age}`);
}


let currentParticipant = new WeakMap();
currentParticipant.set(new Person("Fernando", 12), "Fernando");
console.log("Current participant: ");
console.log(currentParticipant);
