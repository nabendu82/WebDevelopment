//Stephen Mayeux solution
function spinalCase(str) {
	//() are for capturing groups. ([a-z])([A-Z]) means a small and
	//capital letter together. '$1 $2' means first capture group, 
	//followed by space and second capture group.
	str = str.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
	///\s|_/ means spaces OR underscore.
	return str.replace(/\s|_/g, '-');

}

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("AllThe-small Things"));