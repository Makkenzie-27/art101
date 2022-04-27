/**
 *Author: Makkenzie Zepeda
 *Created: April 26, 2022
 *Lab07: Functions
 *License: Public Domain
 */

// nameSorter - a function that takes user input and sorts the letters of their
//name.
function nameSorter(){
  //collects the users name with a comment
  var userName = window.prompt("Please give me your name.");
  document.writeln("<b>"+userName +" </b>Nice name! <br>");

  //split string array: makes the name into an array and prints the result
  var splitArray = userName.split('');
  document.writeln("Here's the plan. We're going to split up the name you gave us: "+splitArray+"<br>");

  //sort the array we split
  var sortArray = splitArray.sort();
  document.writeln("sortArray = "+ sortArray +"<br>");

  //join array back to a string
  var nameJoined = sortArray.join('');
  document.writeln("We collected your name, split it, sort it, and now rearranged it in alphabetical order! " +nameJoined+"<br>");
  return nameJoined;
}


//Output
document.writeln("There you go your name is now: " ,
  nameSorter(), "</br>");
