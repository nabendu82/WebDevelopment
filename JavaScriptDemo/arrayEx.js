var todos = [];
var input = prompt("What would you like to do?");

while(input !== "quit"){
	
	if(input === "list"){
		listTodo();
	}else if(input === "add"){
		addTodo();
	} else if(input === "reverse"){
		reverseArr(todos);
	} else if(input === "uniform"){
		console.log(isUniform(todos));
	} else if(input === "sum"){
		console.log(sumArray(todos));
	} else if(input === "max"){
		console.log(max(todos));
	}
	
	input = prompt("What would you like to do?");
}

console.log("OK, YOU QUIT THE APP");

function listTodo(){
	console.log("**********");
	todos.forEach(function(td, i){
		console.log(i + ": " + td);
	});
	console.log("**********");
	console.log(todos);
}

function addTodo(){
	var newTodo = prompt("Enter new array element");
	todos.push(newTodo);
	console.log("Added Todo");
}

function reverseArr(tod){
	console.log("Reversing");
	for(var i=tod.length-1; i>=0 ; i--){
		console.log(tod[i]);
	}

}

function isUniform(uni){
	// var temp = uni[0];
	for(var i=1; i<uni.length ; i++){
		if(uni[0] !== uni[i]){
			return false;
		}		
	}
	return true;
}

function sumArray(smArr){
	var arrayNum = smArr.map(Number); //Changes array of string to array of Number
	var result = 0;
	// for(var i=0; i<arrayNum.length ; i++){
	// 	result += arrayNum[i];
	// }
	arrayNum.forEach(function(element){
		result += element;
	});
	return result;
}

function max(mxArr){
	var arrayNum = mxArr.map(Number); //Changes array of string to array of Number
	var temp = arrayNum[0];
	for(var i=1; i<arrayNum.length ; i++){
		if(temp < arrayNum[i]){
			temp = arrayNum[i]
		}		
	}
	return temp;

}




