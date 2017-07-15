$(document).ready(function(){
	var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
	var html = '';
	var offlineLogo = 'https://i.imgur.com/Qg9PsRv.png';

	function getTwitch(stream){
		//console.log('https://api.twitch.tv/kraken/streams/' + stream);
		$.ajax({
		 type: 'GET',
		 //url: 'https://api.twitch.tv/kraken/channels/twitch',
		 url: 'https://api.twitch.tv/kraken/streams/' + stream,
		 headers: {
		   'Client-ID': 'eprzthc9u2bdwugt2oe0xrxzvvidjp'
		 },
		 success: function(data) {
		   //console.log(data);
		   if(!(data.stream)){
		   	//console.log(data.stream + " is offline");
		   	//html = data.channel.display_name + " " + data.channel.url;
		   	html = "<div class='users'><h4>" + "<img class='logo' src='" + offlineLogo  + "'><span id='offlineUser'><span class='upper'>" + stream + 
		   	"</span> is offline </a></span><i class='fa fa-user-times' aria-hidden='true'></i></h4></div>";
		   	$(".list").append(html);
		   	$(".list3").append(html);

		   } else{
		   	//console.log(data.stream.channel);
		   	html = "<div class='users'><h4>" + "<img class='logo' src='" + data.stream.channel.logo  + "'>" + "<a href='" + data.stream.channel.url 
		   	+ "' target='_blank'><span id='onlineUser'><span class='upper'>" + data.stream.channel.display_name  + "</span> is online </a></span><i class='fa fa-user' aria-hidden='true'></i></h4></div>";
		   	$(".list").append(html);
		   	$(".list2").append(html);

		   }

		 }
		});

	}

	//getTwitch();

	users.forEach(function(item){
		//console.log(item);

		getTwitch(item)
	});



});