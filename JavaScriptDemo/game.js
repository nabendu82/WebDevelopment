var secretNumber = 4;
var guess = Number(prompt("Guses a number between 1 to 10"));

if(guess === secretNumber){
		alert("YOU GOT IT RIGHT!!!")
	} else if(guess > secretNumber) {
		alert("Too high. Guess again!!");
	} else{
		alert("Too Low. Guess again!!");
	}
