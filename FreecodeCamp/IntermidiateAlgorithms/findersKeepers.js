//My solution and Stephen Mayeux solution
function findElement(arr, func) {
  return arr.filter(func)[0];
}

console.log(findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; }));