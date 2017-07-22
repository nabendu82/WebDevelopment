$(document).ready(function(){
	var html = '';
	

	function searchWiki(){

		$.ajax({
		  url: 'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=' + $('#search').val(),
		  dataType: 'jsonp',
		  type: 'POST',
		  headers: {
		    'Api-User-Agent': 'Example/1.0'
		  },
		  success: function(data) {
		  	// First we clear the children from our class to make sure no previous results are showing.
		  	$('.results').empty();
		  	var resSearch = data.query.search;
		  	resSearch.forEach(function(item){		  		
		  		html = '<div id="articles" class="well"><a href="https://en.wikipedia.org/wiki/' + item.title + 
		  		'"target="_blank"><h3>' + item.title + '</h3><p>' + item.snippet + '</p></a></div>';
		  		 // Displays the elements to the page
		  		 $('.results').append(html);

		  	});


		  }
		});
	}

	function checkTextnotEmpty(){
		//console.log($('#search').val().length);
		if($('#search').val().length <= 0)
			alert("Please enter something to search");
		else
			searchWiki();
	}




	$("#searchButton").on("click", function(){
		checkTextnotEmpty();
		//searchWiki();
	});

	$("#search").on("keypress", function(event){
		if(event.which == 13){
			checkTextnotEmpty();
			//searchWiki();
		}
	})

});