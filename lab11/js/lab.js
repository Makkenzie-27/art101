/*
 *Author: Makkenzie Zepeda
 *Created: May 10, 2022
 *Lab 11: Libraries & jQuery
 *License: Public Domain
 */


 challengeEl = $("#challenge");
 problemsEl = $("#problems");
 resultsEl = $("#results");

 challengeEl.append("<button id='c-button'>Click me!</button>");
 problemsEl.append("<button id='p-button'>Click me!</button>");
 resultsEl.append("<button id='r-button'>Click me!</button>");

//hover color effect / box change
 $("#c-button").hover(function(){
  $("#c-button").toggleClass("hoverColor");
})
$("#c-button").click(function(){
  challengeEl.toggleClass("special");
  $("#c-button").toggleClass("buttonOne");
})

$("#p-button").hover(function(){
 $("#p-button").toggleClass("hoverColor");
})
$("#p-button").click(function(){
 problemsEl.toggleClass("special");
 $("#p-button").toggleClass("buttonTwo");
})


$("#r-button").hover(function(){
 $("#r-button").toggleClass("hoverColor");
})
$("#r-button").click(function(){
 resultsEl.toggleClass("special");
 $("#r-button").toggleClass("buttonThree");
})
