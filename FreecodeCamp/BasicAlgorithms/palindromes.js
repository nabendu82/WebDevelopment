//My Solution
function palindrome(str) {
  str = str.replace(/[^0-9a-zA-Z]/g,'').replace(/ /g,'').toLowerCase();
  var revString = str.split('').reverse().join('');
  return str === revString;
}

//Stephen Mayeux Solution
function palindromeStephen(str){
  str = str.replace(/[\W_]/g,'').toLowerCase();

	if(str.length <= 1){
		return true;
	} else if(str[0] === str.slice(-1)){
		console.log(str);
		return palindromeStephen(str.slice(1, -1));
	} else{
		return false;
	}
}


console.log(palindrome("eye"));
console.log(palindrome("Hello"));
console.log(palindromeStephen("race CAR"));
console.log(palindromeStephen("CAR"));
//racecar 