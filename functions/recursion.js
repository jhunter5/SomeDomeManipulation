function sumTo(number){
    return (number === 1) ? 1 : number + sumTo(number - 1);
}

console.log(sumTo(10));