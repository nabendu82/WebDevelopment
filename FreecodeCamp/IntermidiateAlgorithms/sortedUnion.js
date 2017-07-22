function uniteUnique(arr) {
  var args = Array.prototype.slice.call(arguments);
  var unionArr = [];
  //console.log(args); //[[1, 3, 2], [5, 2, 1, 4], [2, 1]]
  var flattened = args.reduce(function(a, b) {
  return a.concat(b);
  }, []);
  //console.log(flattened); //[1, 3, 2, 5, 2, 1, 4, 2, 1]
  args.forEach(function(item){ //1, 3, 2]
  	unionArr = flattened.filter(function(val){
  			return !item.includes(val);
  	});


  });
  return unionArr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));