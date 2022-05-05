/*
 *Author: Makkenzie Zepeda
 *Created: May 3, 2022
 *Lab09: JavaScript for the Web
 *License: Public Domain
 */

//using getElementById to find my output <div> in the HTML
var outputEl = document.getElementById("output");

//creating a new element and assigning it to a new variable.
var new1El = document.createElement("p");
new1El.innerHTML = "<u>new1El: </u>" + "<br>" + "say something new </br>";



//edits to the new element text
new1El.style.textAlign = "center";
new1El.style.fontSize = "35pt";



//creating a second new element and assigning it to a new variable.
var new2El = document.createElement("p");
new2El.innerHTML = "<u>new2El: </u>" + "<br>" + "say something else </br>";


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

//edits the X Bonus task text
xBonus.style.fontSize = "30pt";
xBonus.style.textDecoration = "underline";

//edited the main header
document.getElementById("mainHeader").style.fontFamily = "Papyrus, fantasy";

//edits the challenges header
document.getElementById("challenges").style.fontFamily = "Papyrus, fantasy";
document.getElementById("challenges").style.color = "IndianRed";

//edits the problems header
document.getElementById("problems").style.color = "Teal";

//edits the results header
document.getElementById("results").style.color = "Purple";

//edits my paragraphs
document.getElementById("paragraph").style.color = "Black";
document.getElementById("paragraph").style.fontFamily = "Verdana, sans-serif";

document.getElementById("paragraph01").style.color = "Black";
document.getElementById("paragraph01").style.fontFamily = "Verdana, sans-serif";

document.getElementById("paragraph02").style.color = "Black";
document.getElementById("paragraph02").style.fontFamily = "Verdana, sans-serif";

document.getElementById("paragraph03").style.color = "Black";
document.getElementById("paragraph03").style.fontFamily = "Verdana, sans-serif";

//Changes to my <div> output
document.getElementById("output").style.color = "DarkSlateGray";
document.getElementById("output").style.backgroundColor = "LightCyan";

//Changes to my <div> content
document.getElementById("content").style.color = "SteelBlue";
document.getElementById("content").style.backgroundColor = "Snow";
document.getElementById("content").style.fontFamily = "Papyrus, fantasy";
