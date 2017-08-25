//The grand hirearchy
function Employee() {}

var emp = new Employee();

emp.prop = "Employee"; //Property of emp object

emp.__proto__.parentProp = "Parent of Employee";

emp.__proto__.__proto__.grandparentProp = "Grand parent";

console.log(emp.__proto__.__proto__ === Object.prototype);
console.log(emp.prop);
console.log(emp.parentProp);
console.log(emp.grandparentProp);

//If you are creating a property on Object, you are creating it for all your system
function Foo() {}

var fooObj = new Foo();

console.log(fooObj.grandparentProp);


