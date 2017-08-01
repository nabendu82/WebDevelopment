//My solution

// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  if(prop === "tracks" && value !== ""){
  	if(!collection[id].hasOwnProperty(prop)) //for eg 2
  		collection[id][prop] = [value];
  	else
  		collection[id][prop].push(value); //for eg 4 and 5
  } else if((prop === "artist" || prop === "album") && value !== ""){
  	collection[id][prop] = value; //for eg 1
  } else{
  	delete collection[id][prop]; //for eg 3 and 6
  }
  
  return collection;
}

// Alter values below to test your code
console.log(updateRecords(5439, "artist", "ABBA")); //eg 1
console.log(updateRecords(5439, "tracks", "Take a Chance on Me"));//eg 2
console.log(updateRecords(2548, "artist", ""));//eg 3
console.log(updateRecords(1245, "tracks", "Addicted to Love"));//eg 4
console.log(updateRecords(2468, "tracks", "Free"));//eg 5
console.log(updateRecords(2548, "tracks", ""));//eg 6


