//My Solution
function confirmEnding(str, target) {
  return str.substring(str.length - target.length) === target;
}

console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));

//Stephen Mayeux Solution
function confirmEndingStephen(str, target) {
  str = str.toLowerCase().replace(/\W_/g, '');
  return str.slice(-Math.abs(target.length)) === target;
}

console.log(confirmEndingStephen("Bastian", "n"));
console.log(confirmEndingStephen("Walking on water and developing software from a specification are easy if both are frozen", "specification"));


