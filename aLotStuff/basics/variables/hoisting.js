console.log(myVar); // Output: undefined (No error)
var myVar = "Hello World!";
console.log(myVar); // Output: Hello World!


function hoist() {
  a = 20;
  var b = 100;
}

hoist();

console.log(a);




