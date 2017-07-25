//My Solution
function sumAll(arr) {
	var newArr = [];
	arr.sort(function(a,b){
		return a - b;
	});

	for(var i=arr[0]; i<=arr[1] ; i++)
		newArr.push(i);

	return newArr.reduce(function(prev, curr){
		return prev + curr;
	});
}

console.log(sumAll([1, 4]));
console.log(sumAll([10, 5]));

//Stephen Mayeux solution
function sumAllStephen(arr) {
	var newArr = [];
	var min = Math.min.apply(null, arr);
	var max = Math.max.apply(null, arr);

	for(var i=min; i<=max ; i++)
		newArr.push(i);

	return newArr.reduce(function(a, b){
		return a + b;
	});
}

console.log(sumAllStephen([1, 4]));
console.log(sumAllStephen([10, 5]));