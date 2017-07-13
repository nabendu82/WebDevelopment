
$(document).ready(function() {
	var quote, author, message;
	function getQuote(){
		$.ajax({
			url: 'https://api.forismatic.com/api/1.0/',
			jsonp: 'jsonp',
			dataType: 'jsonp',
			data: {
				method: 'getQuote',
				lang: 'en',
				format: 'jsonp'
			},
			success: function(response){
				//console.log(response);
				quote = response.quoteText;
				author = response.quoteAuthor;
				if(!author){
					author = "Unknown";
				}
				$("#quote").html(quote + "<br>" + "<h4><i>-" +
					author + "</h4></i>");
				message = quote + "- " + author;
			}

		});
	}
	$(".getMessage").on("click", function(){
		getQuote();
	});

	$(".shareMessage").on("click", function(){
		//tweet($(msg).text()); 
		window.open('https://twitter.com/intent/tweet?hashtags= freecodecamp&text='   
			+ encodeURIComponent(message));

	});




	getQuote();

});