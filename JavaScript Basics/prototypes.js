//Everytime you create a function the JS engine creates two objects - one is the function object and 
//other is the prototype object.
function foo() {}


console.log(foo); //object 1
console.log(foo.prototype); //object 2

//Everytime we create an object it points to the prototype object
var newFooObj = new foo();
foo.prototype.test = "This is the prototype object of foo";
console.log(newFooObj);
console.log(foo.prototype.test);
console.log(newFooObj.__proto__.test); //Points to prototype object by __proto__
console.log(foo.prototype === newFooObj.__proto__);

//When we check for a property in a object JS first checks in the object and then checks
//in it's prototype.
console.log(newFooObj.test);


//By prototype we can have different objects(created by same constructor function),
//share a same method/property.
function Employee(name){
  this.name = name;
}

var emp1 = new Employee("Nabs");
var emp2 = new Employee("Shikha");
console.log(emp1);
console.log(emp2);

Employee.prototype.playPranks = function(){
  console.log("Prank Played");
}

console.log(Employee.prototype.playPranks());
console.log(emp1.playPranks());
console.log(emp2.playPranks()); 

//When we create a new object a __proto__ reference created to prototype object. Same way
//the prototype object will have a constructor back to the function

function foz() {}
console.log(foz.prototype);

var a = new foz();
console.log(a.__proto__);

console.log(foz.prototype.constructor);
console.log(a.__proto__.constructor); //same as above