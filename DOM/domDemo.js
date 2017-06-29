// Uncomment below code for continous toggling blue white color

// var bd = document.querySelector("body"); //SELECT
// var isBlue = false;

// setInterval(function(){
// 	if(isBlue){
// 		bd.style.background = "white";
// 	} else {
// 		bd.style.background = "blue";
// 	}
// 	isBlue = !isBlue;
// }, 1000);

//Below code for toggling color with button(long version)

// var bd = document.querySelector("body");
// var but = document.querySelector("button");
// var isPurple = false;

// but.addEventListener("click", function(){
// 	if(isPurple){
// 		bd.style.background = "white";
		
// 	} else {
// 		bd.style.background = "purple";
		
// 	}
// 	isPurple = !isPurple;
// });

//Shorter version

var but = document.querySelector("button");
but.addEventListener("click", function(){
	document.body.classList.toggle("purple");
})

