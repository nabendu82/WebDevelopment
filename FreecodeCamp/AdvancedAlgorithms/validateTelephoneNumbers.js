//My Solution
function telephoneCheck(str) {
	var newStr = str.replace(/\s|-/g, '');
	// console.log(str);
	// console.log(newStr);
	if(/\d{11}/.test(newStr)){
		//console.log("contains 11 digit");
		if(str[0] !== '1')
			return false;
		else if(/\d\(\d{3}\)\d{7}|\d{11}/.test(newStr))
			return true;

	} else if(/\d{10}/.test(newStr)){
		//console.log("contains 10 digit");
		if(/\D\d{10}/.test(newStr))
			return false;
		else if(/\D\d{3}\D\d{7}/.test(newStr))
			return true;
		else 
			return true;
	}else{
		//console.log("contains 12 or more digit");
		return false;
	}

}

// [0-9 equivalent \d]

console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("5555555555"));
console.log(telephoneCheck("1 555-555-5555"));
console.log(telephoneCheck("1 (555) 555-5555"));
console.log(telephoneCheck("1 555 555 5555"));
console.log(telephoneCheck("123**&!!asdf#"));
console.log(telephoneCheck("-1 (757) 622-7382"));
console.log(telephoneCheck("(555-555-5555"));
console.log(telephoneCheck("1 (555) 555-5555"));
console.log(telephoneCheck("(555)555-5555"));
console.log(telephoneCheck("1(555)555-5555"));


	//() are for capturing groups. ([a-z])([A-Z]) means a small and
	//capital letter together. '$1 $2' means first capture group, 
	//followed by space and second capture group.
	//str = str.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();

	///\s|_/ means spaces OR underscore.
	//return str.replace(/\s|_/g, '-');

	//Replaces all whitespace and underscore
	//str = str.toLowerCase().replace(/\W_/g, '');

	//Replaces all special characters and whitespace
	//str = str.replace(/[\W_]/g,'').toLowerCase();


//Stephen Mayeux solution
function telephoneCheckStephen(str) {
	var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
	return regex.test(str);


}

console.log(telephoneCheckStephen("1 555-555-5555"));
console.log(telephoneCheckStephen("1 (555) 555-5555"));
console.log(telephoneCheckStephen("1 555 555 5555"));
console.log(telephoneCheckStephen("123**&!!asdf#"));
console.log(telephoneCheckStephen("-1 (757) 622-7382"));
console.log(telephoneCheckStephen("(555-555-5555"));
console.log(telephoneCheckStephen("1 (555) 555-5555"));
console.log(telephoneCheckStephen("(555)555-5555"));
console.log(telephoneCheckStephen("1(555)555-5555"));