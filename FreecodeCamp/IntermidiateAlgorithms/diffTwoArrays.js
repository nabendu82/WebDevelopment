//My Solution
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

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));

//Stephen Mayeux solution
function diffArrayStephen(arr1, arr2) {
	var newArr = arr1.concat(arr2);
	return newArr.filter(function(value, index, array){
		if(array.slice(index+1).indexOf(value) === -1 && !array.slice(0,index).includes(value))
			return value;
	});
          
}

console.log(diffArrayStephen([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArrayStephen(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
