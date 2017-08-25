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

//Method #4 - calling a function by bib=nding this reference to arbitary object
function fuzz(){
  this.name = name;
  console.log("Method #4");
  console.log(this);
}

fuzz.call({});

//Method 4 Example


function createEmployeeObj(firstName, lastName, gender, age){
  
  this.firstName = firstName;
  this.lastName = lastName;
  this.gender = gender;
  this.age = age;
  this.happyBirthday = function(){
    this.age += 1;
  }
}


var employee1 = new createEmployeeObj("Nabs", "Biswas", "M", 30);


var employee2 = new createEmployeeObj("Shikha", "Biswas", "F", 30);
employee2.happyBirthday();


function HRdept(name){
  this.name = name;
}

var hrRep = new HRdept("raman");

hrRep.happyBirthday = employee1.happyBirthday; //Create a function from createEmployeeObj
//Below won't work as hrRep doesn't have a function happyBirthday
// hrRep.happyBirthday();

//Using method 4
hrRep.happyBirthday.call(employee1);
console.log(hrRep);
console.log(employee1);





