/*
 *Author: Makkenzie Zepeda
 *Created: May 25, 2022
 *Lab 15: AJAX
 *License: Public Domain
 */



 // var endpoint = "http://www.yerkee.com/api";
 var endpoint = "http://www.yerkee.com/";

 function getAjax() {
 	$.ajax({
   	url: endpoint,
    //ant data to send
    data: { id: 123},
    //POST or GET request
    type: "GET",
    //data type we expect back
    dataType: "json",
   })
   .done(function(data){
   	console.log("Worked!", data);
   	$("#output").append("<h3>" + data.title + "</h3>");
   	$("#output").append("<p>" + data.alt);
    $(selector).get(URL, callback);
    $(selector).post(URL, data, callback);
    $(selector).load(URL, data, callback);
   })
   .fail(function(request, error){
     console.log(request, error);
   	$("#output").html("Something Isn't Working.");
   })
 }

 $("button").click(getAjax);
