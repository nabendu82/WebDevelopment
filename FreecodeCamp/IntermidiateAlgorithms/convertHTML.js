//My Solution
function convertHTML(str) {
  return str.replace(/[&]/g, '&amp;').replace(/[<]/g, '&lt;').replace(/[>]/g, '&gt;').replace(/["]/g, '&quot;').replace(/[']/g, '&apos;');
}

console.log(convertHTML("Dolce & Gabbana"));

//Stephen Mayeux solution
function convertHTMLStephen(str) {
	var entities = {
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;',
		'"': '&quot;',
		'\'': '&apos;'
	};

	return str.split('').map(function(char){
		return entities[char] || char;
	}).join('');

}

console.log(convertHTMLStephen("Dolce & Gabbana"));
