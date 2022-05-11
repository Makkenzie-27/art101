/*
 *Author: Makkenzie Zepeda
 *Created: May 10, 2022
 *Lab 11: Libraries & jQuery
 *License: Public Domain
 */


 challengeEl = $("#challenge");
 problemsEl = $("#problems");
 resultsEl = $("#results");
 bonusEl = $("#output");

 challengeEl.append("<button id='c-button'>Click me!</button>");
 problemsEl.append("<button id='p-button'>Click me!</button>");
 resultsEl.append("<button id='r-button'>Click me!</button>");
 bonusEl.append("<button id='bonus-button'>Click me!</button>");

//hover color effect / box change when the Challenge button is pressed:


$("#c-button").hover(function(){
  $("#c-button").toggleClass("hoverOne");
})
$("#c-button").click(function(){
  challengeEl.toggleClass("changeOne");
  $("#c-button").toggleClass("buttonOne");
})

//Problems button is pressed:

$("#p-button").hover(function(){
  $("#p-button").toggleClass("hoverTwo");
})
$("#p-button").click(function(){
  problemsEl.toggleClass("changeTwo");
  $("#p-button").toggleClass("buttonTwo");
})

//Results button is pressed:

$("#r-button").hover(function(){
  $("#r-button").toggleClass("hoverThree");
})
$("#r-button").click(function(){
  resultsEl.toggleClass("changeThree");
  $("#r-button").toggleClass("buttonThree");
})

//X Bonus Task:

$("#bonus-button").hover(function(){
  $("#bonus-button").toggleclass("buttonFour")
})
$("#bonus-button").click(function(){
  $(":button").toggleClass("buttonOne");
  $(".sectionbox").toggleClass("changeOne");
})
