//My Solution
function findLongestWord(str) {
	var array = str.split(' ');
	var max = 0;
	for(var i=0; i<array.length; i++){
		if(array[i].length > max)
			max = array[i].length;
	}
  return max;
}

//Stephen Mayeux Solution
function findLongestWordStephen(str) {
	var max = 0;
	str.split(' ').forEach(function(word){
		if(word.length > max)
			max = word.length;
	});
	return max;

}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWordStephen("What is the average airspeed velocity of an unladen swallow"));
