//My Solution and Stephen Mayeux solution
function destroyer(arr) {
	var args = Array.prototype.slice.call(arguments, 1);
	var array = Array.prototype.slice.call(arguments[0]);
	return array.filter(function(val){
		return !args.includes(val);
	});
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));