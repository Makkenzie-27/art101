/*
 *Author: Makkenzie Zepeda
 *Created: May 26, 2022
 *Lab 16: JSON and APIs
 *License: Public Domain
 */



 var endpoint = "https://xkcd.com/info.0.json";
 var issueNum = 0;

 function getAndPutData() {
 	$.ajax({
   	  url: endpoint,
      dataType: 'json',
      type: "GET",


   })
   .done(function(data){
   	console.log("Worked!");
    outputEl = $("#output");
    issueNum = data.num;


    outputEl.html("<h1 class='inOutput'>"+data.title+"</h1>");
    outputEl.append("<img src='"+ data.img +"' class='imgOutput'/>");
    outputEl.append("<p class='inOutput'>"+data.alt+"</p>");
    outputEl.append("<p class='inOutput'>Date: "+data.month+"/"+data.day+"/"+data.year+"</p>");
    outputEl.append("<p class='inOutput'>Issue Number: "+data.num+"</p>");
  })

   .fail(function(request, error){
   	$("#output").html("Ah Ah Ah, You Didn't Use the Magic Word");
   })
 }

 $("#activate").click(getAndPutData);

 $('#previous').click(function(){
   issueNum -=1;
   endpoint = "https://xkcd.com/"+issueNum+"/info.0.json"
   getAndPutData(endpoint);
 })
 $('#next').click(function(){
   issueNum +=1;
   endpoint = "https://xkcd.com/"+issueNum+"/info.0.json"
   getAndPutData(endpoint);
 })
