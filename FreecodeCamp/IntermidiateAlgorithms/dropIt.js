//My Solution
function dropElements(arr, func) {
	//get the first true element by filter
	//get the index and slice it
	var firstTrue = arr.filter(func)[0];
	if(arr.indexOf(firstTrue) === -1)
		return [];
	else
		return arr.slice(arr.indexOf(firstTrue));

}

console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}));

//Stephen Mayeux solution
function dropElementsStephen(arr, func) {
//Keep on removing the element until false
//The shift method removes the element at the zeroeth 
//index and shifts the values at consecutive indexes down.
while(!func(arr[0])) //[0,1,0,1]
	arr.shift();  //willbecome [1,0,1]
return arr;

}


console.log(dropElementsStephen([0, 1, 0, 1], function(n) {return n === 1;}));

