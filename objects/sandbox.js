let object1 = {
    property: "value",
    property2: "value2",
    property3: "value3",
    "property 4": "value4"
}

console.log(object1.property)

let propertyKey = "property3"

console.log(object1[propertyKey])

console.log(object1["property 4"])


function makePlayer(name, role, champion, rank, team, worldChampion) {
    return {
        name,
        role,
        champion,
        rank,
        team,
        worldChampion,
    }
}

let faker = makePlayer("Faker", "Mid", "Zed", 1, "SKT", true)

console.log(faker)

let makeChampion = (name, role, difficulty) => {
    return {
        name,
        role,
        difficulty,
    }
}

let pyke = makeChampion("Pyke", "Support", "Hard")

console.log(pyke)

function secureObtainProperty (object, property){
    if (property in object){
        return object[property]
    } else {
        throw new Error("Property does not exist")
    }
}

console.log(secureObtainProperty(pyke, "name"))
// console.log(secureObtainProperty(pyke, "sex"))

function printObjectProperties(object){
    for (let property in object){
        console.log(`${property}: ${object[property]}`)
    }
}

printObjectProperties(pyke)


function cloneObject(object){
    let clone = {};
    for (let property in object){
        clone[property] = secureObtainProperty(object, property)
    }
    return clone;
}

let pykeClone = cloneObject(pyke)
console.log(pykeClone)

let fakerClone = Object.assign({}, faker)
console.log(fakerClone)

pyke.talk = function(){ console.log("U are on the list")}

pyke.talk()

pyke.q = function(){ console.log("Hook")}
pyke.w = function(){ console.log("Move")}
pyke.e = function(){ console.log("Stun")}
pyke.r = function(){ console.log("Execute")}

pyke.listAbilities = function(){
    for (let property in this){
        if (typeof this[property] === "function" && property !== "listAbilities"){
            console.log(property)
        }
    }
} 

pyke.q()

pyke.listAbilities()

function MakeSoccerPlayer(name, team, position, number, goals, assists, yellowCards, redCards){
    return {
        name,
        team,
        position,
        number,
        goals,
        assists,
        yellowCards,
        redCards,
        scoreGoal(){
            this.goals++
        },
        getTransfered(newTeam){
            this.team = newTeam
        },
    }
}

let messi = MakeSoccerPlayer("Messi", "Barcelona", "Forward", 10, 50, 20, 5, 0)

console.log(messi?.goals)
messi.scoreGoal()
console.log(messi?.goals)
messi.getTransfered("PSG")
console.log(messi?.team)
messi.getTransfered("Inter Miami")