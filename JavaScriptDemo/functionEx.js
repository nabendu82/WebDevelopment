var numStr = prompt("Enter a number");
var num = Number(numStr);
var str = prompt("Enter a kebab-case string");

function isEven(number){
	if(number % 2 === 0){
		return true;
	}
	return false;
}

//i=2, number =6
//i=1, number = 6
function factorial(number){
	if(number === 0){
		return 1;
	}
	for(var i = number-1; i >= 1; i--){
		number = number * i;
	}
	return number;
}

function kebabToSnake(string){
	return string.replace(/-/g, "_");
}



alert("The number entered even is " + isEven(num) + ". The factorial of number is " + factorial(num) + ". Kebab to Snake string is " + kebabToSnake(str));