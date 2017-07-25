//My Solution
function translatePigLatin(str) {
if(str[0] === 'a' || str[0] === 'e' || str[0] === 'i' || str[0] === 'o' || str[0] === 'u')
	return str + "way";

for(var i=0; i<str.length ; i++){
	if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u')
		return str.substr(i) + str.substr(0,i) + "ay";

	}
}

console.log(translatePigLatin("consonant"));

//Stephen Mayeux solution
function translatePigLatinStephen(str) {
	var vowels = ['a', 'e', 'i', 'o', 'u'], 
	result = str.split('');

	if(vowels.includes(str.charAt(0)))
		return str += "way";

	for(var i=0; i<str.length ; i++){
		if(!vowels.includes(str[i])){
			result.push(result.shift());
		} else{
			result.push('ay');
			return result.join('');

		}

	}


}

console.log(translatePigLatinStephen("paragraphs"));
