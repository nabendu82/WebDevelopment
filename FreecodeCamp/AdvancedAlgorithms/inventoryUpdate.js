//My Solution
function updateInventory(arr1, arr2) {
    arr2.forEach(function(array2){
        arr1.forEach(function(array1){
           if(array1[1] === array2[1])
                array1[0] += array2[0];
        });

        var flattened = arr1.reduce(function(a, b) {
          return a.concat(b);
        }, []);
        
        if(flattened.indexOf(array2[1]) === -1)
            arr1.push(array2);


    });
    return arr1.sort(function(a,b) { //sorting alphabatically
        if (a[1] < b[1]) return -1;
        else if (a[1] > b[1]) return 1;
        return 0;
    });
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));

//Stephen Mayeux solution
function updateInventoryStephen(arr1, arr2) {
    var inventory = arr1.concat(arr2).reduce(function(acc, next){
        if(acc[next[1]]){
            acc[next[1]] += next[0];
        } else {
            acc[next[1]] = next[0];
        }
        return acc;

    },{});

    return Object.keys(inventory).map(function(value){
        return [inventory[value], value];
    }).sort(function(a,b) { //sorting alphabatically
        if (a[1] < b[1]) return -1;
        else if (a[1] > b[1]) return 1;
        return 0;
    });

}

console.log(updateInventoryStephen(curInv, newInv));
