/*
 *Author: Makkenzie Zepeda
 *Created: May 26, 2022
 *Lab 16: JSON and APIs
 *License: Public Domain
 */



 var endpoint = "https://xkcd.com/125/";

 function getAjax() {
 	$.ajax({
   	  url: endpoint,
      dataType: 'json',
      type: "GET",


   })
   .done(function(data){
   	console.log("Worked!");
     var month = data.month;
     var num = data.num;
     var link = data.link;
     var year = data.year;
     var news = data.news;
     var safe_title = data.safe_title;
     var transcript = data.transcript;
     var alt = data.alt;
     var img = data.img;
     var title = data.title;
     var day = data.day;

     console.log(month, num, link, year, news, safe_title, transcript);
   	$("#output").append("<h3>" + month + "</h3>");
   	$("#output").append("<img src=" + img + ">");
    $("#output").append("<h3>" + num + "</h3>");
    $("#output").append("<h3>" + link + "</h3>");
    $("#output").append("<h3>" + year + "</h3>");
    $("#output").append("<h3>" + news + "</h3>");
    $("#output").append("<h3>" + safe_title + "</h3>");
    $("#output").append("<h3>" + transcript + "</h3>");
    $("#output").append("<h3>" + alt + "</h3>");
    $("#output").append("<h3>" + title + "</h3>");
    $("#output").append("<h3>" + day + "</h3>");

   })
   .fail(function(request, error){
   	$("#output").html("Ah Ah Ah, You Didn't Use the Magic Word");
   })
 }

 $("#activate").click(getAjax);
