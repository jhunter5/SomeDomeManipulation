function myOwnPow(base, exponent){
    try{
        if (exponent < 0) throw new Error("Negative exponent");
        if (exponent == 0) return 1;
        return base * myOwnPow(base, exponent - 1);
    } catch (e) {
        console.log(e);
    }
}

myOwnPow(2, 3);

function isDivisible(dividend, divisor){
    try{
        if (divisor === 0) throw new Error("Divide by zero it's not possible");
        return dividend % divisor === 0;
    } catch (e) {
        console.log(e);
    }
}

// console.log(isDivisible(10, 5));

function isPrime(number){
    if (number < 2) return false;
    let limit = Math.sqrt(number);
    for(let i = 2; i <= limit; i++){
        if (number % i === 0){
            return false;
        }
    }
    return true;
}

// console.log(isPrime(5))

// relative prime
let listDivisors = new Map();

function isRelativePrime(...numbers){
    let divisors = numbers.map(number => getDivisors(number));
    let relativePrime = true;
    for(let i = 0; i < divisors.length - 1; i++){
        for(let j = i + 1; j < divisors.length; j++){
            for(let divisor of divisors[i]){
                if (divisors[j].has(divisor) && divisor !== 1){
                    relativePrime = false;
                    break;
                }
            }
            if (!relativePrime) break;
        }
        if (!relativePrime) break;
    }
    return relativePrime;
}

function getDivisors(number){
    if (listDivisors.has(number)){
        return listDivisors.get(number);
    }
    let divisors = new Set();
    for(let i = 1; i <= Math.sqrt(number); i++){
        if (number % i === 0){
            divisors.add(i);
            divisors.add(number / i);
        }
    }
    listDivisors.set(number, divisors);
    return divisors;
}

console.log(isRelativePrime(6,35,11,221));
// console.log(isRelativePrime(6, 35));
// console.log(listDivisors);


