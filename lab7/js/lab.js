/**
 *Author: Makkenzie Zepeda
 *Created: April 26, 2022
 *Lab07: Functions
 *License: Public Domain
 */

// nameSorter - a function that takes user input and sorts the letters of their
//name.
function nameSorter(u){
  //prints the users input
  document.writeln("<b>"+ u +"</b>, Nice name! <br><br>");

  //split string array: makes the name into an array and prints the result
  var splitArray = u.split('');
  document.writeln("Here's the plan.<br><br>");
  document.writeln("We're going to split up the name you entered: "+"<b>"+splitArray+"</b><br><br>");

  //sort the array we split
  var sortArray = splitArray.sort();
  document.writeln("Now we are going to sort it alphabetically: "+ "<b>"+sortArray +"</b><br><br>");

  //join array back to a string
  var nameJoined = sortArray.join('');
  document.writeln("Lets put your name back together shall we? <br><br> ");
  document.writeln("Here is your name joined together: "+"<b>"+nameJoined+"</b><br><br>");
  return nameJoined;
}


//Output
var userName = window.prompt("Please enter your name:");
document.writeln("There you go! Your name is now: " +"<b>",
  nameSorter(userName), "</b></br>");
