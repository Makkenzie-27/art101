/*
 *Author: Makkenzie Zepeda
 *Created: May 15, 2022
 *Lab 12: Conditionals
 *License: Public Domain
 */

 function mod(x){
   var length = x.length;
   var value = length % 4;
   console.log(value);
   return value;
 }

 //Bonus Task number 2:
 function sortingHat(x){
   var houses = ["Gryffindor", "Ravenclaw", "Slytherin", "Hufflepuff"];
   return houses[x];
 }

function description(x){
  var houseOne = ("Gryffindor house: is where you would find the pluckiest and most" +
  " daring students (there is a reason the house symbol is the brave lion). " +
  " The house colors are scarlet and gold, the common room lies up in Gryffindor" +
   " Tower and the Head of House is Professor Minerva McGonagall. If the Sorting" +
  " Hat placed you here, you would have demonstrated qualities like courage, bravery" +
  " and determination. Some of the wizarding world is best and brightest belonged" +
  " to this house, Harry Potter and Albus Dumbledore are just a couple that spring to mind!" +
  " If you are lucky enough to end up in Gryffindor, we imagine you are the type of" +
  " person who likes to stand up for the little guy, challenges authority, has a" +
  " tendency to act first and think later, is known as a class clown and takes board" +
  " games very seriously.");

  var houseTwo = ("Ravenclaw house: If you are looking for the brainiest students, you would find" +
   " them in Ravenclaw (with a couple of notable exceptions like Hermione Granger)." +
   " The Ravenclaw colours are blue and bronze, the emblem is an eagle, the Head"+
  " of House is Professor Filius Flitwick and the common room sits at the top of"+
  " Ravenclaw Tower behind an enchanted knocker. The Sorting Hat would only put"+
  " you in this house if you demonstrated excellent wisdom, wit and a skill for learning."+
  " Ravenclaws are often known for being quite eccentric and most of the great wizarding"+
  " inventors and innovators have come from this house. We can imagine that you would"+
  " get to sit up in Ravenclaw Tower, while surveying the excellent views, if you are"+
  " the type of person who analyses everything, is an overachiever, can be described"+
  " as away with the fairies, is not afraid to be an individual and has a head stuffed full of interesting facts.");

  var houseThr = ("Slytherin house: has an unfortunate reputation. While it is true "+
  " that a lot of dark witches and wizards were sorted into Slytherin, not all who "+
  " belong to this house are bad. In fact, there are a lot of excellent qualities"+
  " the Sorting Hat looks for in potential Slytherins and Merlin himself even belonged"+
  " to this misunderstood house! The house colours for Slytherin are silver and emerald"+
  " green and the emblem is a serpent. The Head of House is Professor Severus Snape,"+
  " and the common room can be found down in the dungeons under the lake (which only"+
  " adds to the Slytherin air of mystery). If the Sorting Hat placed you in this noble house,"+
  " then you are most likely ambitious, shrewd, and possibly destined for greatness."+
  " We can imagine you are the kind of person who is always one step ahead, has a dark"+
  " sense of humour, thinks reputation is important, takes pride in their appearance"+
  " and does not let anyone see their soft side.");

  var houseFr = ("Hufflepuff house: Hufflepuff is where you will find the most "+
  " trustworthy and hardworking students. In fact, out of all the houses Hufflepuff"+
  " has produced the least number of dark witches and wizards. The badger is the symbol"+
  " of this house, the colours are yellow and black, the Head of House is Professor"+
  " Pomona Sprout and the common room can be found near the kitchens in Hogwarts."+
  " There is an idea that Hufflepuffs are the least clever of all Hogwarts students,"+
  " but that is not true. Hufflepuffs are just the most humble of all the houses"+
  " and do not feel the need to shout about their achievements in the same way as the others."+
  " If you were lucky enough to be sorted into this house, we can imagine you are the"+
  " type of person who has a strong moral compass, always works hard, is the most "+
  " loyal friend, knows it is the taking part that counts and always has the best snacks.");


  if (x == 0){
    return houseOne;
  }
  else if (x == 1){
    return houseTwo;
  }
  else if (x == 2){
    return houseThr;
  }
  else {
    return houseFr;
  }

}

var myButton = document.getElementById("button");

myButton.addEventListener("click", function(){
  var nameInput = document.getElementById("input").value;
  var outputEl = document.getElementById("output");
  var output2El = document.getElementById("output2");
  var value = mod(nameInput);

  outputEl.innerHTML = ("The Sorting Hat has sorted you into "+ sortingHat(value) + "!<br>");
  output2El.insertAdjacentHTML("beforeend","<h3>DESCRIPTION</h3>");
  output2El.append(description(value));
})
