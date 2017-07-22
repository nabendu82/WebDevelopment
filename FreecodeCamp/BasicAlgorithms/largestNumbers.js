//My Solution
function largestOfFour(multiArr) {
	var largest = [];
	multiArr.forEach(function(arr){
		var temp = 0;
		arr.forEach(function(val){
			if(val > temp)
				temp = val;
		});
		largest.push(temp);

	});
  
  return largest;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

//Stephen Mayeux Solution
function largestOfFourStephen(multiArr) {
	var largest = [];
	multiArr.forEach(function(arr){
		largest.push(arr.sort(function(a, b){
			return b - a;
		})[0]);
	});
	return largest;

}

console.log(largestOfFourStephen([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
