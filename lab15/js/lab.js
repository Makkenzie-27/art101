/*
 *Author: Makkenzie Zepeda
 *Created: May 25, 2022
 *Lab 15: AJAX
 *License: Public Domain
 */




// var endpoint = "https://yesno.wtf/#api";
var endpoint = "https://yesno.wtf/api";

function getAjax() {
	$.ajax({
  	url: endpoint,
    type: "GET",

  })
  .done(function(data){
  	console.log("Worked!");
    var answer = data.answer;
    var imgUrl = data.image;
    console.log(answer, imgUrl);
  	$("#output").html("<h3>" + answer + "</h3>");
  	$("#output").append("<img src=" + imgUrl + ">");

  })
  .fail(function(request, error){
  	$("#output").html("Ah Ah Ah, You Didn't Use the Magic Word");
  })
}

$("#activate").click(getAjax);



//Bonus Task
//NASA's Picture of the Day
// var endpoint = "http://numbersapi.com/42/";
// var endpoint = "https://xkcd.com/info.0.json";
var nasaEndpoint = "https://api.nasa.gov/planetary/apod";

function getNasaAjax() {
	$.ajax({
  	url: nasaEndpoint,
    type: "GET",
    data: {
    	api_key: "0JpHHNGBd500KLTVOjR6w3nq4AOVP3kSsvzZtgxK",
      count: 1
    }
  })
  .done(function(data){
  	console.log("Worked!");
    var pAPOD = data[0];
    console.log(pAPOD);
    var title = pAPOD.title;
    var descr = pAPOD.explanation;
    var imgUrl = pAPOD.url;
    console.log(title, descr, imgUrl);
  	$("#output2").html("<h3>" + title + "</h3>");
  	$("#output2").append("<img src=" + imgUrl + ">");
  	$("#output2").append("<p>" + descr + "</p>");
  })
  .fail(function(request, error){
  	$("#output2").html("Something fucked up.");
  })
}

$("#APOD").click(getNasaAjax);
