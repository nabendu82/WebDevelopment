//My Solution
function booWho(bool) {
	return typeof(bool) === 'boolean';
}

console.log(booWho(null));

//Stephen Mayeux solution
function booWhoStephen(bool) {
	return bool === true || bool === false;
}

console.log(booWhoStephen(true));

