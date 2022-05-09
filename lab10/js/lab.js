/*
 *Author: Makkenzie Zepeda
 *Created: May 5, 2022
 *Lab 10: JavaScript Events and Forms
 *License: Public Domain
 */


//shuffleArray - takes the split array and shuffles the contents
//thanks to wes modes https://wmodes.github.io/art101/lab10/index.html
function shuffleArray(split) {
  var currentIndex = split.length, temporaryValue, randomIndex;

  //shuffles the remains of elements
  while (0 !== currentIndex) {

    //picks off what is left of the element
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    //swaps the location of the current element
    temporaryValue = split[currentIndex];
    split[currentIndex] = split[randomIndex];
    split[randomIndex] = temporaryValue;
  }
  var joined = split.join('');
  return joined.charAt(0).toUpperCase() + joined.substr(1).toLowerCase();
}



//find the button element
 var buttonEl = document.getElementById("my-button");

//add an event lisener to the button
 buttonEl = addEventListener("click", function(){
   console.log("click");
   //get the value from the name element
   var nameInput = document.getElementById("name").value;
   //put the value in output element
   var outputEl = document.getElementById("output");

   //split the array of the name from the nameIpnput
   var split = nameInput.split('');
   split.sort();
   //join the array back together in an arranged order
   var joined = split.join('');
   outputEl.innerHTML = (joined);
 })


//finds the anButton element
 var anButtonE1 = document.getElementById("aButton");

//adds an event listener to aButton
 anButtonE1 = addEventListener("click", function(){
   console.log("aButton");

   //get the value from the name element
   var nameInput = document.getElementById("newName").value;

   //put the value in output element
   var annOutputEl = document.getElementById("annOutput");
   //split the array of the name from the nameInput
   var split = nameInput.split('');
   //calls the shuffleArray function to split the nameInput
   console.log(shuffleArray(split));
   //prints out the input
   annOutputEl.innerHTML = (shuffleArray(split));
 })
