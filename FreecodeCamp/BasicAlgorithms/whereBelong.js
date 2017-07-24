//My Solution
function getIndexToIns(arr, num) {
	arr = arr.sort(function(a,b){
		return a - b;
	});
	for(var i=0 ; i<arr.length ; i++){
		if(arr[i] >= num)
			return i;
	}
	return arr.length;
}

console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([2, 5, 10], 15));

//Stephen Mayeux solution
function getIndexToInsStephen(arr, num) {
	return arr.concat(num).sort(function(a,b){
		return a - b;
	}).indexOf(num);

}

console.log(getIndexToInsStephen([40, 60], 50));
console.log(getIndexToInsStephen([2, 5, 10], 15));
