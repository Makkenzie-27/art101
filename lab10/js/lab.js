/*
 *Author: Makkenzie Zepeda
 *Created: May 5, 2022
 *Lab 10: JavaScript Events and Forms
 *License: Public Domain
 */

 var buttonEl = document.getElementById("my-button");

 buttonEl = addEventListener("click", function(){
   console.log("click");
   var nameInput = document.getElementById("name").value;
   var outputEl = document.getElementById("output");

   var split = nameInput.split('');
   split.sort();
   var joined = split.join('');
   outputEl.innerHTML = (joined);
 })
