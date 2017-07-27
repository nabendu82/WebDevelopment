//Stephen Mayeux solution
function uniteUnique(arr) {
  var args = Array.prototype.slice.call(arguments);
  var result = [];
  //console.log(args); //[[1, 3, 2], [5, 2, 1, 4], [2, 1]]
  args.reduce(function(a, b) { //[1, 3, 2, 5, 2, 1, 4, 2, 1]
  return a.concat(b);
  }).forEach(function(item){
      if(result.indexOf(item) === -1)
        result.push(item);
  });  
  return result;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

