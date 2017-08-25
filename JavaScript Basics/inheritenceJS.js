function Employee(name){
  this.name = name;
}

Employee.prototype.getName = function(){
  return this.name;
}

var emp1 = new Employee("Nabs");

console.log(emp1.getName());

function Manager(name, dept){
  this.name = name;
  this.dept = dept;
}

Manager.prototype.getDept = function(){
  return this.dept;
}

var mgr = new Manager("Vasu", "Citi");

console.log(mgr.getDept());

//console.log(mgr.getName()); --Gives error as mgr have no property getName

//One way to solve this is to put the getName in Object's prototype, but by that way
//all the other objects in the JS environment can access it.
//We will change the manager's prototype to point to employee's prototype instead of the
//default Global Object prototype.

console.log(mgr.__proto__.__proto__ === Object.prototype);//Pointing to Global Object

//Changing now
mgr.__proto__.__proto__ = Employee.prototype;

console.log(mgr.getName());
