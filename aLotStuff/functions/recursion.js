function sumTo(number){
    return (number === 1) ? 1 : number + sumTo(number - 1);
}

console.log(sumTo(20));

function fibonacci(number){

    return (number <=1) ? number : fibonacci(number - 1) + fibonacci(number - 2);
}

// console.log(fibonacci(13));

function memoize(func){
    let cache = new Map();
    return function(number){
        if(cache.has(number)){
            return cache.get(number);
        }
        let result = func(number);
        cache.set(number, result);
        return result;
    }
}

// let fibonacciMemo = memoize(fibonacci);
// console.log(fibonacciMemo(100));

function fibonacciNotRecursion(number){
    let a = 3;
    let b = 3;
    for(let i = 3; i <= number; i += 2){
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

console.log(fibonacciNotRecursion(20));

function fibonacciFormula(number){
    let phi = (1 + Math.sqrt(5)) / 2;
    return Math.round(Math.pow(phi, number) / Math.sqrt(5));
}

// console.log(fibonacciFormula(10));