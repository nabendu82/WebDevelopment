//My Solution
function sym(args) {
	var differenceArr = [];
	for(var i=0; i<arguments.length; i++){
		differenceArr = diffArray(differenceArr, arguments[i]);
	}
	//This is to remove duplicates values eg in [1,1,4,4,5]
	return differenceArr.filter(function(item, index, array){
		return array.indexOf(item) === index;
	});

  
}


function diffArray(arr1, arr2) {
  var diffArr = [];
  arr1.forEach(function(val){
  	if(arr2.indexOf(val) === -1)
  		diffArr.push(val);
  });

  arr2.forEach(function(val){
  	if(!arr1.includes(val))//same as arr1.indexOf(val) === -1
  		diffArr.push(val);
  });


  return diffArr;
}


console.log(sym([1, 2, 3], [5, 2, 1, 4]));
console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]));

//Stephen Mayeux solutions
function symStephen(args) {
	args = Array.prototype.slice.call(arguments);

	return args.reduce(function(acc, next){
		acc = removeDups(acc);
		next = removeDups(next);
		acc = diffArrayStephen(acc, next);
		return acc;
	});  
}


function removeDups(arr){
	var result = [];
	arr.forEach(function(val){
		if(result.indexOf(val) === -1)
			result.push(val);
	});
	return result;
}

function diffArrayStephen(arr1, arr2) {
	var newArr = arr1.concat(arr2);
	return newArr.filter(function(value, index, array){
		if(array.slice(index+1).indexOf(value) === -1 && !array.slice(0,index).includes(value))
			return value;
	});
          
}

console.log(symStephen([1, 2, 3], [5, 2, 1, 4]));
console.log(symStephen([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]));