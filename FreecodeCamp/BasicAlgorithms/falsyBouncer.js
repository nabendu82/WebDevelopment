//My Solution
function bouncer(arr) {
  return arr.filter(function(word){
  	return Boolean(word);
  });
}

console.log(bouncer([7, "ate", "", false, 9]));

//Stephen Mayeux solution
function bouncerStephen(arr) {
  return arr.filter(function(word){
  	return word;
  });
}

console.log(bouncerStephen([7, "ate", "", false, 9]));
