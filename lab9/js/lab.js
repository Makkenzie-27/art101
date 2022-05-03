/*
 *Author: Makkenzie Zepeda
 *Created: April 30, 2022
 *Lab08: Anon Functions and Callbacks
 *License: Public Domain
 */

//using getElementById to find my output <div> in the HTML
var outputEl = document.getElementById("output");

//creating a new element and assigning it to a new variable.
var new1El = document.createElement("p");
new1El.innerHTML = "say something new";


//edits to the new element text
new1El.style.textAlign = "center";
new1El.style.fontSize = "35pt";


//creating a secind new element and assigning it to a new variable.
var new2El = document.createElement("p");
new2El.innerHTML = "new2El: " + "<bre>" + "say something else </br>";


//edits to the new element text
new2El.style.textAlign = "center";
new2El.style.fontSize = "40pt";


//appending both elements separetly.
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);


// added a new element to the top of an elment. added children ontop of outputEl.
var xBonus = document.createElement("p");
xBonus.innerHTML = "X Bonus Task 1";
outputEl.insertBefore(xBonus, outputEl.children[0]);
xBonus.style.fontSize = "30pt";

//edited the main header
document.getElementById("mainHeader").style.fontFamily = "Papyrus, fantasy";

//edits the header challenges
document.getElementById("challenges").style.fontFamily = "Papyrus, fantasy";

//Changes to my <div> output
document.getElementById("output").style.color = "DarkSlateGray";
document.getElementById("output").style.backgroundColor = "LightCyan";

//Changes to my <div> content
document.getElementById("content").style.color = "SteelBlue";
document.getElementById("content").style.backgroundColor = "Snow";
document.getElementById("content").style.fontFamily = "Papyrus, fantasy";
