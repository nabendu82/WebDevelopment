//Similar to textContent in Javascript
$("h1").text("jQuery New Page!!!");
//Similar to innerHtml in Javascript
$("ul").html("<li>Icream-Sandwitch</li><li>Jellbeans</li><li>kitkat</li>");
$("img:first-of-type").attr("src", "http://i.dailymail.co.uk/i/pix/2013/06/21/article-2346010-1A6F2756000005DC-325_634x435.jpg");
$("img:first-of-type").css("width", "200px");
$("img").last().attr("src", "http://i.dailymail.co.uk/i/pix/2013/06/21/article-2346010-1A6F2756000005DC-325_634x435.jpg");
$("img").last().css("width", "200px");
$("input").attr("type", "number");
//Similar to .value() in Javascript
$("input").val("112133");
alert($("select").val());
//Similar to addClass and removeClass in Javascript
$("h1").addClass("correct");
$("li").addClass("wrong");
$("li").removeClass("wrong");
//Similar to toggleClass in Javascript
$("li").first().toggleClass("done");
$("li").toggleClass("done");



