$(document).ready(function() {
  var latitude = 0;
  var longitude = 0;
  var temperature, apiData;
  //var proxy = 'https://crossorigin.me/';
  //var apiLinkDS = "https://api.forecast.io/forecast/58e6fc7988b566fbb46acf27271f9b1d/";
  //var apiLinkDS ="http://api.openweathermap.org/data/2.5/weather?lat=";
  //+lat+"&lon="+long+"&APPID=****MyKEY****"
  
  function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
        getWeather();
    } else { 
        console.log("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    latitude = Math.round(position.coords.latitude);
    longitude = Math.round(position.coords.longitude);
    //apiLinkDS += latitude + "&lon=" + longitude + "&units=imperial" + "&appid=ad837236cdd0a0f5980cb5ad0360ee1f";
  //console.log("apiLinks:" + apiLinkDS);
}
  
 function getWeather(){
     // $.ajax({
     //        //format: "jsonp",
     //        //dataType: "jsonp",
     //        url: apiLinkDS,
     //        success:function(data) { 
     //            console.log(data);
     //            $("#weather").text(data);
     //        }
     //    })
     // .error(function(jqXHR, textStatus, errorThrown) {
     //   console.log("error: " + JSON.stringify(jqXHR));
     // })
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+ latitude + "&lon=" + longitude + "&units=imperial" + "&appid=ad837236cdd0a0f5980cb5ad0360ee1f", 
      function(data){
          apiData = data;
          //console.log(data);
          temperature = apiData.main.temp + "&deg; F";
          displayTemp(apiData);
          

    })

   
 }

 $("form input:radio").change(function (){
  if ($(this).val() == "c") {
    temperature = Math.round((apiData.main.temp - 32) * (5/9)) + "&deg; C";
    //console.log(celcius);
    displayTemp(apiData);
  } else{
    //farenheit = celcius * 1.8 + 32;
    temperature = apiData.main.temp + "&deg; F";
    displayTemp(apiData);

  }
 });

 function displayTemp(data){
  var iconCode = data.weather[0].icon;
  var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
  $("#weather").html("<img src='" + iconUrl  + "'>" + "<h3>" + temperature + "</h3>");

 }

 getLocation();
});