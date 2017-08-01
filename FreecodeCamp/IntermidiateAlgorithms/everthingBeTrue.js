//My solution
function truthCheck(collection, pre) {
  return collection.every(function(obj){
    return obj.hasOwnProperty(pre) && obj[pre];    
  });
}

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));


//Stephen Mayeux solution
function truthCheckStephen(collection, pre) {
	return collection.every(function(obj){
	  return obj[pre];
	  //If any object doesn't have the property it will return undefined.
	  //and it it have it will check for true.    
	});

}

console.log(truthCheckStephen([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));

