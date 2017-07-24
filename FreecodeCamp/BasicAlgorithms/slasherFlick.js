//My Solution
function slasher(arr, howMany) {
  return arr.slice(howMany);
}

console.log(slasher([1, 2, 3], 2));

//Stephen Mayeux solution
function slasherMayeux(arr, howMany) {
  arr.splice(0, howMany);
  return arr;
}

console.log(slasherMayeux([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5));