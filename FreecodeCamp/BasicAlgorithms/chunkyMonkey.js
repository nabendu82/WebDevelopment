//My Solution
function chunkArrayInGroups(arr, size) {
	var multiArr = [];
	for(var i=0; i<arr.length ; i+=size)
		multiArr.push(arr.slice(i, i+size));
  	return multiArr;
}



console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));

//Stephen Mayeux Solution
function chunkArrayInGroupsStephen(arr, size) {
	var newArray = [];
	var counter = 0;
	while(counter < arr.length){
		newArray.push(arr.slice(counter, counter+size));
		counter += size;
	}
	return newArray;
}

console.log(chunkArrayInGroupsStephen(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroupsStephen([0, 1, 2, 3, 4, 5, 6], 3));

