function makeFunction() {
    let counter = 0;
    function incrementCounter() {
        counter++;
    }
    function getCounter() {
        return counter;
    }
    return {
        incrementCounter,
        getCounter
    };
}

let myNewFunction = makeFunction();
myNewFunction.incrementCounter();
console.log(myNewFunction.getCounter()); // Imprime 1

let myNewFunction2 = makeFunction();
myNewFunction2.incrementCounter();
myNewFunction2.incrementCounter();
console.log(myNewFunction2.getCounter()); // Imprime 2