$("h1").click(function(){
	alert("h1 clicked");
});

$("button").click(function(){
	$(this).css("background", "pink");
	alert($(this).text());
});

$("input").keypress(function(event){
	if(event.which === 13){
		alert("Enter was pressed");
	}
});

$("h2").on("click", function(){
	$(this).css("color", "purple");
});

$("button").on("mouseenter", function(){
	$(this).css("font-weight", "bold");
});

$("button").on("mouseleave", function(){
	$(this).css("font-weight", "normal");
});