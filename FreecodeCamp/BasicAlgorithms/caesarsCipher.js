//My Solution
function rot13(str) { // LBH QVQ VG!
	var array = [];
	for(var i=0; i<str.length ; i++)
		array.push(str.charCodeAt(i));
	var newArray = array.map(function(val){
		if(val >= 65 && val <= 77)
			return val + 13;
		else if(val >= 78 && val <= 90)
			return 64+(13-(90-val));
		else
			return val;
	});
	return String.fromCharCode.apply(null, newArray);
  
}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."));

//Stephen Mayeux solution
function rot13Stephen(str) { // LBH QVQ VG!
	var characters = str.split('');
	return characters.map(function(letter){
		letter = letter.charCodeAt();
		if(letter >= 65 && letter <= 77)
			letter += 13;
		else if(letter >= 78 && letter <= 90)
			letter -= 13;

		return String.fromCharCode(letter);

	}).join('');

}

console.log(rot13Stephen("SERR PBQR PNZC"));
console.log(rot13Stephen("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."));