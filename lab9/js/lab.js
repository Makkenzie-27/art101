/*
 *Author: Makkenzie Zepeda
 *Created: April 30, 2022
 *Lab08: Anon Functions and Callbacks
 *License: Public Domain
 */

//using getElementById to find my output <div> in the HTML
var outputEL = document.getElementById("output");

//creating a new element and assigning it to a new variable.
var new1El = document.createElement("p");
new1El.innerHTML = "say something new";


//edits to the new element text
new1El.style.textAlign = "center";
new1El.style.fontSize = "35pt";


//creating a secind new element and assigning it to a new variable.
var new2El = document.createElement("p");
new2El.innerHTML = "say something else";


//edits to the new element text
new2El.style.textAlign = "center";
new2El.style.fontSize = "40pt";


//appending both elements separetly.
outputEL.appendChild(new1El);
outputEL.appendChild(new2El);


//Changes to my <div> output
document.getElementById("output").style.color = "DarkSlateGray";
document.getElementById("output").style.backgroundColor = "LightCyan";

//Changes to my <div> content
document.getElementById("content").style.color = "SteelBlue";
document.getElementById("content").style.backgroundColor = "Snow";

//Changed the color of the body
document.body.style.backgroundColor = "LightSalmon";
