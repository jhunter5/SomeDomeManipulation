let myFirstArray = ["Juan", "Hunter", "Malaver"]
console.log(myFirstArray[2])

myFirstArray.push("Software Engineer")
console.log(myFirstArray)

myFirstArray.shift()
console.log(myFirstArray)

myFirstArray.unshift("Juan")
for (let value of myFirstArray){
    console.log(value)
}
console.log('hello ' + myFirstArray.at(-1))
myFirstArray.splice(1, 1, "Hs")
myFirstArray.splice(2, 0, "Mlvr")
myFirstArray.splice(myFirstArray.length - 1, 1, "sfw eng")
console.log(myFirstArray)


let southAmericaCountries= ["Colombia", "Venezuela", "Ecuador", "Peru", "Bolivia", "Chile", "Argentina", "Uruguay", "Paraguay", "Brazil"]
console.log(southAmericaCountries.slice(0, 3))

let northAmericaCountries = ["Canada", "USA", "Mexico"] 

let america = southAmericaCountries.concat(northAmericaCountries)
console.log(america)

for (let entrie of america.entries()){
    console.log(entrie)
}   


let [first, second, third, ...others] = america
console.log(others)