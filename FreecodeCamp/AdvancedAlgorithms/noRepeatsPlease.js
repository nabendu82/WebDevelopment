//My Solution
function permAlone(str) {
	var arr = str.split('');
	var perArr = [];

	function swap(a,b){
	var tmp = arr[a];
	arr[a] = arr[b];
	arr[b] = tmp;
	}

	//Heap's algorithm
	function generate(n){
	if(n === 1 && !/([a-z])\1+/.test(arr.join(''))){//To check repeating alphabets
		perArr.push(arr.join(''));
	} else {
		for(var i=0; i<n ; i++){
			generate(n-1);
			if(n%2 == 0)
				swap(0, n-1);
			else
				swap(i, n-1);
			}
		} 
	}

	generate(arr.length);
	console.log(perArr);
	return perArr.length;

  
}

console.log(permAlone('abc'));
console.log(permAlone('abcd'));
console.log(permAlone("aab"));
console.log(permAlone("aabb"));