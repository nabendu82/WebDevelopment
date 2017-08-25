//Object basics
var myObj = {}; //inline empty object
var myObj2 ={
  "foo": "value",
  "age": 30,
  "addess": {
      "street": "15th Cross",
      "city": "BL",
      "pincode": 123456
  }
};

console.log(myObj);
console.log(myObj2.foo);
console.log(myObj2["age"]);


//Employee Management example
var emp1 = {
  "firstName": "Parag",
  "lastName": "Khandar",
  "gender": "M",
  "designation": "Project Manager"
};

var emp2 = {};
emp2.firstName = "Amit";
emp2.lastName = "Bharadwaj";
emp2.gender = "M";
emp2.designation = "Delivery Manager";

//Creating a function to dynamically create employee objects
function createEmployeeObject(firstName, lastName, gender, designation){
  var newObject = {};
  newObject.firstName = firstName;
  newObject.lastName = lastName;
  newObject.gender = gender;
  newObject.designation = designation;
  return newObject;
}

var emp3 = createEmployeeObject("Nabendu", "Biswas", "M", "Coder");

//Creating the same above function using constructer
function createEmployeeObj(firstName, lastName, gender, designation){
  //var this = {}; -> WIll be done by JS
  this.firstName = firstName;
  this.lastName = lastName;
  this.gender = gender;
  this.designation = designation;
  //return this; -> WIll be done by JS
}

//The new keyword creates a new Object with constructor
var emp4 = new createEmployeeObj("Nabs", "Biswas", "M", "CTO");