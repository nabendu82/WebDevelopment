//My Solution
function steamrollArray(arr) {
	return arr.reduce(function(acc, curr) {
	  if (Array.isArray(curr)) {
	    return steamrollArray(acc.concat(curr));
	  }
	  return acc.concat(curr);
	},[]);

}

console.log(steamrollArray([1, [2], [3, [[4]]]]));

//Stephen Mayeux solution
function steamrollArrayStephen(arr) {
	return arr.reduce(function(acc, next){
		return acc.concat(Array.isArray(next) ? steamrollArrayStephen(next) : next);

	},[]);

}

console.log(steamrollArrayStephen([1, [2], [3, [[4]]]]));

