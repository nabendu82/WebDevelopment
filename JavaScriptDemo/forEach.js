var nums = [45,65,88,67];

console.log("*** Normal forEach output ***");
//Normal forEach
nums.forEach(function(num){
	console.log(num);
});


//Our own forEach
function myForEach(arr, func){
	//loop through array
	for(var i=0; i<arr.length; i++){
		//call func for each item in array
		func(arr[i]);
	}
}

var colors = ["red", "green", "yellow"];

console.log("*** Simple forEach outputs ***");
myForEach(colors, console.log);

myForEach(colors, function(col){
	console.log("This is color " + col);
});

//Our replica of forEach
console.log("*** Replica forEach output ***");
Array.prototype.replicaForEach = function(fun){
	for(var i=0; i<this.length ; i++){
		fun(this[i]);
	}
}

var friends = ["Nabendu", "Parag", "Amit"];

friends.replicaForEach(function(name){
	console.log(name + "'s name is " + name.length + " character long.");
});