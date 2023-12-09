let var1 = null

let var2 = var1 || "default value" // This is a cool way to assign a default value to a variable

console.log(var2)

// undefined ? 

let var3 = undefined || "default value" 
console.log(var3)

let var4 = null || undefined || false
console.log(var4) // tow are falsy values, so it will print undefined, cause it is the last value



