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

     if ((i % 3 == 0)&&(i % 5 == 0)&&(i % 7 == 0)&&(i % 8 == 0)){
       console.log("FizzBuzzBoomBang");
       fbb += (i + " FizzBuzzBoomBang!<br><br>");
     }

     else if (i % 3 == 0){
       console.log("Fizz");
       fbb += (i + " Fizz!<br><br>");
     }

     else if ((i % 3 == 0)&&(i % 5 == 0)){
       console.log("FizzBuzz");
       fbb += (i + " FizzBuzz!<br><br>");
     }

     else if ((i % 3 == 0)&&(i % 7 == 0)){
       console.log("FizzBoom");
       fbb += (i + " FizzBoom!<br><br>");
     }

     else if ((i % 3 == 0)&&(i % 8 == 0)){
       console.log("FizzBang");
       fbb += (i + " FizzBang!<br><br>");
     }

     else if (i % 5 == 0){
       console.log("Buzz");
       fbb += (i + " Buzz!<br><br>");
     }

     else if ((i % 5 == 0)&&(i % 3 == 0)){
       console.log("BuzzFizz");
       fbb += (i + " BuzzFizz!<br><br>");
     }

     else if ((i % 5 == 0)&&(i % 7 == 0)){
       console.log("BuzzBoom");
       fbb += (num + " BuzzBoom!<br><br>");
     }

     else if ((i % 5 == 0)&&(i % 8 == 0)){
       console.log("BuzzBang");
       fbb += (i + " BuzzBang!<br><br>");
     }

     else if (i % 7 == 0){
       console.log("Boom");
       fbb += (i + " Boom!<br><br>");
     }

     else if ((i % 7 == 0)&&(i % 3 == 0)){
       console.log("BoomFizz");
       fbb += (i + " BoomFizz!<br><br>");
     }

     else if ((i % 7 == 0)&&(i % 5 == 0)){
       console.log("BoomBuzz");
       fbb += (i + " BoomBuzz!<br><br>");
     }

     else if ((i % 7 == 0)&&(i % 8 == 0)){
       console.log("BoomBang");
       fbb += (i + " BoomBang!<br><br>");
     }

     else if (i % 8 == 0){
       console.log("Bang");
       fbb += (i + " Bang!<br><br>");
     }

     else if ((i % 8 == 0)&&(i % 3 == 0)){
       console.log("BangFizz");
       fbb += (i + " BangFizz!<br><br>");
     }

     else if ((i % 8 == 0)&&(i % 5 == 0)){
       console.log("BangBuzz");
       fbb += (i + " BangBuzz!<br><br>");
     }

     else if ((i % 8 == 0)&&(i % 7 == 0)){
       console.log("BangBoom");
       fbb += (i + " BangBoom!<br><br>");
     }

     else {
       console.log(i);
       fbb += (i + "<br><br>");
     }
 }
  return fbb;
}

outputEl = $("#output").append(fizzBuzzBoom);
