//My Solution
function sumPrimes(num) {
	var arr = [];
	//Creating an array of all numbers upto num, starting from 2
    for(var i=2; i<=num ; i++)
		arr.push(i);
    //arr = [2, 3, 4, 5, 6, 7, 8, 9, 10];
	return arr.filter(function(num){
		return isPrime(num);//filtering out all non-prime numbers
	}).reduce(function(a, b){ //[2,3,5,7] passed
		return a + b;//adding all prime numbers
	});
}

function isPrime(num){
	for(var i=2; i<num; i++){
		if(num%i == 0)
			return false;
	}
	return true;

}

console.log(sumPrimes(10));
//2,3,5,7

//Stephen Mayeux solution
function sumPrimesStephen(num) {
	var range = [];
	for(var i=2; i<=num ; i++){
		if(isPrime(i)) //Usng My isPrime()
			range.push(i);
	}
	return range.reduce(function(a, b){
		return a + b;
	});

}

console.log(sumPrimesStephen(10));

