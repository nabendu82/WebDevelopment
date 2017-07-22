//My Solution
function factorialize(num) {
	var total = 1;
	for(var i=2; i<=num ; i++){
		total = i*total;

	}
  	return total;
}

//Stephen Mayeux Solutions
function factorializeStephen(num) {
	if(num === 0) //For 0! = 1
		return 1;
	var array = [];
	for(var i=1; i<=num ; i++){
		array.push(i);
	}

	return array.reduce(function(a, b){
		return a*b;
	});
}

function factorializeStephen2(num) {
	if(num === 0) //For 0! = 1
		return 1;
	if(num === 1){
		return 1;
	} else{
		return num * factorializeStephen2(num-1);
	}
}

console.log(factorialize(0));
console.log(factorializeStephen(5));
console.log(factorializeStephen2(3));