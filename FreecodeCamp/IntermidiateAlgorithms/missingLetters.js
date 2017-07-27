//My Solution
function fearNotLetter(str) {
	var array = [], newStr = ""; 
	var first = str.charCodeAt(0); //97
	var last = first + str.length; //101
	var realLast = str[str.length-1].charCodeAt();
	//return first + " " + last + " " + realLast;
	if(last > realLast)
		return undefined;

	for(var i=first; i<=last ; i++)
		array.push(i);
	newStr = String.fromCharCode.apply(null, array);

	for(var j=0; j<newStr.length; j++){
		if(!str.includes(newStr[j]))
			return newStr[j];
	}


}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("bcd"));

//Stephen Mayeux solution
function fearNotLetterStephen(str) {
	var numbers = str.split('').map(function(letter){
		return letter.charCodeAt();
	});

	for(var i=0; i<numbers.length; i++){
		if(numbers[i+1] - numbers[i] > 1)
			return String.fromCharCode(numbers[i] + 1);
	}
	return undefined;
}

console.log(fearNotLetterStephen("abce"));
console.log(fearNotLetterStephen("bcd"));
