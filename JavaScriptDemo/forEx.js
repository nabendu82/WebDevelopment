//All number between -10 and 19
console.log("All number between -10 and 19");
for(var num=-10;num < 20;num++){
	console.log(num);
}

//All even numbers between 10 and 40

console.log("All even numbers between 10 and 40");
for(var num = 10;num <= 40;num++){
	if(num % 2 === 0){
		console.log(num);
	}	
	
}

//All odd numbers between 300 and 333

console.log("All odd numbers between 300 and 333");
for(var num = 300;num <= 333;num++){
	if((num % 2) !== 0){
		console.log(num);
	}	
	
}

//All numbers divisible by 5 and 3 between 5 and 50

console.log("All numbers divisible by 5 and 3 between 5 and 50");
for(var num = 5;num <= 50;num++){
	if((num % 5 === 0) && (num % 3 === 0)){
		console.log(num);
	}	
	
}