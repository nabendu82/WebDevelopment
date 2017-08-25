//Ways to create empty object
var simple = {};

var obj = new Object(); //By Global Object

console.log(simple);
console.log(obj);

console.log(Object.prototype);
console.log(obj.__proto__);

console.log(simple.__proto__);

//Proves that simple is also created using new Object
console.log(obj.__proto__ === simple.__proto__);