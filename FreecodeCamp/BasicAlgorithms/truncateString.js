//My Solution and Stephen Mayeux Solution
function truncateString(str, num) {
	if(num <= 3)
		return str.slice(0,num) + "...";
	else if(str.length > num)
		return str.slice(0,num-3) + "...";
	else
		return str;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));
console.log(truncateString("Absolutely Longer", 2));
