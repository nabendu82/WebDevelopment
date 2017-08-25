//Calling function with different methods and value of this

//Method #1 - this refers to global object
function foo(){
  console.log("Method #1");
  console.log(this);
}

foo();

//Method #2 - this refers to that object
var obj = {};
obj.foz = function(){
  console.log("Method #2");
  console.log(this);
};

obj.foz();

//Method #3 - this refers to newly created object
function fdo(){
  console.log("Method #3");
  console.log(this);
}

new fdo();

//Method #4
function createEmployeeObj(firstName, lastName, gender, age){
  
  this.firstName = firstName;
  this.lastName = lastName;
  this.gender = gender;
  this.age = age;
  this.happyBirthday = function(){
    this.age += 1;
  }
}


var employee = new createEmployeeObj("Nabs", "Biswas", "M", 30);
employee.happyBirthday();