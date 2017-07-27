//My Solution
function sumFibs(num) {
	//Make an array of all Fibonacci numbers less then num
	//add all odd numbers in the array and return
	var arr = [];
	arr.push(1, 1);
	for(var i=0; arr[i]+arr[i+1]<=num ; i++)
		arr.push(arr[i]+arr[i+1]);
	return arr.reduce(function(accum, curr){ //sum of all odd numbers
		if(curr%2 !== 0)
			return accum + curr;
		else
			return accum;
	},0);

}

console.log(sumFibs(4)); 
console.log(sumFibs(10)); 
// 1, 1, 2, 3, 5, 8

//Stephen Mayeux solution
//Modifying Array to get last and secondlast elements
Array.prototype.last = function() {
	return this[this.length-1];
};

Array.prototype.secondLast = function() {
	return this[this.length-2];
};


function sumFibsStephen(num) {
	var sequence = [1,1];

	while(sequence.last() + sequence.secondLast() <= num)
		sequence.push(sequence.last() + sequence.secondLast());

	return sequence.filter(function(num){//getting all odd numbers
		return num % 2 !== 0;
	}).reduce(function(a, b){
		return a + b;
	});


}

console.log(sumFibsStephen(4)); 
console.log(sumFibsStephen(10)); 