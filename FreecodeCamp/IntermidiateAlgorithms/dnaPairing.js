//My Solution
function pairElement(str) {
	var array = str.split('');
	var multiArr = [];
	array.forEach(function(item){
		multiArr.push(dnaPairing(item));
	});

	return multiArr;

}

function dnaPairing(item){
	switch(item){
		case 'G': return ["G","C"];
		case 'C': return ["C","G"];
		case 'A': return ["A","T"];
		case 'T': return ["T","A"];
	}
}

console.log(pairElement("GCG"));

//Stephen Mayeux solution
function pairElementStephen(str) {
	var pairs = {G: 'C', C: 'G', A: 'T', T: 'A'};

	return str.split('').map(function(item){
		return [item, pairs[item]];
	});


}

console.log(pairElementStephen("GCG"));

