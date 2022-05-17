/*
 *Author: Makkenzie Zepeda
 *Created: May 17, 2022
 *Lab 13: Loops
 *License: Public Domain
 */


/*Create a FizzBuzz function that loops throught numbers 1 to 200*/
/*Make it so the output of your program appears in your output div.*/
function fizzBuzzBoom(){

  var fbb = "";
  for (var i=1; i <= 200; i++){

     if ((i % 3 == 0)&&(i % 5 == 0)&&(i % 7 == 0)){
       console.log("FizzBuzzBoom");
       fbb += (i + " FizzBuzzBoom!<br>");
     }

     else if (i % 3 == 0){
       console.log("Fizz");
       fbb += (i + " Fizz!<br>");
     }
     else if ((i % 3 == 0)&&(i % 5 == 0)){
       console.log("FizzBuzz");
       fbb += (i + " FizzBuzz!<br>");
     }

     else if ((i % 3 == 0)&&(i % 7 == 0)){
       console.log("FizzBoom");
       fbb += (i + " FizzBoom!<br>");
     }

     else if (i % 5 == 0){
       console.log("Buzz");
       fbb += (i + " Buzz!<br>");
     }

     else if ((i % 5 == 0)&&(i % 3 == 0)){
       console.log("BuzzFizz");
       fbb += (i + " BuzzFizz!<br>");
     }

     else if ((i % 5 == 0)&&(i % 7 == 0)){
       console.log("BuzzBoom");
       fbb += (num + " BuzzBoom!<br>");
     }

     else if (i % 7 == 0){
       console.log("Boom");
       fbb += (i + " Boom!<br>");
     }

     else if ((i % 7 == 0)&&(i % 3 == 0)){
       console.log("BoomFizz");
       fbb += (i + " BoomFizz!<br>");
     }

     else if ((i % 7 == 0)&&(i % 5 == 0)){
       console.log("BoomBuzz");
       fbb += (i + " BoomBuzz!<br>");
     }

     else {
       console.log(i);
       fbb += (i + "<br>");
     }
 }
  return fbb;
}

outputEl = $("#output").append(fizzBuzzBoom);
