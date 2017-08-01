//My Solution(Only works for small numbers)
function smallestCommons(arr) {
	var newArr = [], multiArr = [];
	var min = Math.min.apply(null, arr);
	var max = Math.max.apply(null, arr);
	min =(min === 1) ? min+1 : min;

	for(var i=min; i<=max ; i++)
		newArr.push(i);
		newArr.forEach(function(item){//[2,3,4,5]
		var tempArr = [];
		for(var i=1; i<=1000 ; i++){
			tempArr.push(item*i);
		}
		multiArr.push(tempArr);

	});
	return LCM(multiArr);
}

function LCM(multiArr){
	for(var i=0 ; i<multiArr[0].length; i++){
		for(var j=1 ; j<multiArr.length; j++){
			if(multiArr[j].indexOf(multiArr[0][i]) === -1)
				break;
		}

		if(j === multiArr.length)
			return multiArr[0][i];

	}

}

console.log(smallestCommons([1, 3]));
console.log(smallestCommons([4, 1]));
console.log(smallestCommons([1, 5]));
//console.log(smallestCommons([23, 18]));




//Bullyen solution
//https://stackoverflow.com/questions/31302054/how-to-find-the-least-common-multiple-of-a-range-of-numbers
//This solution checks the multiple of the largest number(brilliant)
//Like in [1,5] it will check 5,10,15,20,25,30,35,40,45,55,60
//It will check that whether a multiple is divisible by all
//numbers in the range. If not goto next multiple.
function smallestCommonsStephen(arr) {
	//order our array so we know which number is smallest and which is largest
		var sortedArr = arr.sort(),
		//the smallest common multiple that leaves no remainder when divided by all the numbers in the rang
		smallestCommon = 0,
		//smallest multiple will always be the largest number * 1;
		multiple = sortedArr[1];
		//console.log(sortedArr[1]);

		while(smallestCommon === 0) {
			//check all numbers in our range
			for(var i = sortedArr[0]; i <= sortedArr[1]; i++ ){
				if(multiple % i !== 0 ){
					//if we find even one value between our set that is not perfectly divisible, we can skip to the next multiple
					break;
				}

				//if we make it all the way to the last value (sortedArr[1]) then we know that this multiple was perfectly divisible into all values in the range
				if(i == sortedArr[1]){
					smallestCommon = multiple;
				}

			}

			//move to the next multiple, we can just add the highest number.
			multiple += sortedArr[1];
		}

		//console.log(smallestCommon);
		return smallestCommon;

}

console.log(smallestCommonsStephen([1, 3]));
console.log(smallestCommonsStephen([1, 5]));
console.log(smallestCommonsStephen([23, 18]));


