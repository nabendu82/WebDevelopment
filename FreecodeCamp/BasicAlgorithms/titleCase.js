//My Solution and Stephen Mayeux Solution
function titleCase(str) {
	return str.split(' ').map(function(val){
		return val.charAt(0).toUpperCase() + val.slice(1).toLowerCase();
	}).join(' ');
}

console.log(titleCase("I'm a little tea pot"));