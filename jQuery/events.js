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