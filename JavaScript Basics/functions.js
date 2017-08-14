//Function assigned to variable
var f = function foo(name){
  console.log("Hello " + name);  
};

f();

//Anynomus function
var z = function(){
  console.log("World");  
};

z();

//Function passed as arguments
var executor = function(fn1,fn2,name){
  console.log("Executor function been executed");
  fn1(name),fn2();
};

executor(f,z,"nabs");

//Functions on Objects
var myObj = {
  "name": true
};

myObj.myFunc = function(){
  console.log("Function in object");
}

myObj.myFunc();




