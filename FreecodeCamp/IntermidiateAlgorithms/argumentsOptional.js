//My solution
function addTogether() {
	var args = Array.prototype.slice.call(arguments);

	if(args.length === 2){
		if(typeof(args[0]) === 'number' && typeof(args[1]) === 'number')
			return args[0] + args[1];
		else
			return undefined;
	} else if(args.length === 1){
		if(typeof(args[0]) === 'number'){
			return function(b){
              if(typeof(b) === 'number')
                return args[0] + b;
              else
                return undefined;              
            };
		}			
		else
			return undefined;
	}
}

console.log(addTogether(2,3));
console.log(addTogether(2)(3));
console.log(addTogether("http://bit.ly/IqT6zt"));
console.log(addTogether(2, "3"));
console.log(addTogether(2)([3]));

//Stephen Mayeux solution
function addTogetherStephen() {
	function checkIfNumber(num){
		return typeof num === 'number' ? num : undefined;
	}

	var a = checkIfNumber(arguments[0]);
	var b = checkIfNumber(arguments[1]);

	if(arguments.length > 1){
		return a && b ? a+b : undefined;
	} else {
		if(a){
			return function(b){
				if(checkIfNumber(b))
					return a+b;
				else
					return undefined;
			};
		} else {
			return undefined;
		}
	}

}

console.log(addTogetherStephen(2,3));
console.log(addTogetherStephen(2)(3));
console.log(addTogetherStephen("http://bit.ly/IqT6zt"));
console.log(addTogetherStephen(2, "3"));
console.log(addTogetherStephen(2)([3]));