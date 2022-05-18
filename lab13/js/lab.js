/*
 *Author: Makkenzie Zepeda
 *Created: May 17, 2022
 *Lab 13: Loops
 *License: Public Domain
 */


/*Create a FizzBuzz function that loops throught numbers 1 to 200*/
/*Make it so the output of your program appears in your output div.*/
function mod(total, valOne, valTwo, valThr, valFour, a, b, c, d){


  var str = "";
  for(let i = 0; i <= total ;i++){
    if ((i % valOne == 0)&&(i % valTwo == 0)&&(i % valThr == 0)&&(i % valFour == 0)){
      str += (i +" "+a+b+c+d+"<br>");

    } else if ((i % valOne == 0)&&(i % valTwo == 0)&&(i % valThr == 0)){
      str += (i +" "+a+b+c+"<br>");
    } else if ((i % valOne == 0)&&(i % valTwo == 0)&&(i % valFour == 0)){
      str += (i +" "+a+b+d+"<br>");
    } else if ((i % valOne == 0)&&(i % valThr == 0)&&(i % valFour == 0)){
      str += (i +" "+a+c+d+"<br>");
    } else if ((i % valTwo == 0)&&(i % valThr == 0)&&(i % valFour == 0)){
      str += (i +" "+b+c+d+"<br>");

    } else if ((i % valOne == 0)&&(i % valTwo == 0)){
      str += (i +" "+a+b+"<br>");
    } else if ((i % valOne == 0)&&(i % valThr == 0)){
      str += (i +" "+a+c+"<br>");
    } else if ((i % valOne == 0)&&(i % valFour == 0)){
      str += (i +" "+a+d+"<br>");
    } else if ((i % valTwo == 0)&&(i % valThr == 0)){
      str += (i +" "+b+c+"<br>");
    } else if ((i % valTwo == 0)&&(i % valFour == 0)){
      str += (i +" "+b+d+"<br>");
    } else if ((i % valThr == 0)&&(i % valFour == 0)){
      str += (i +" "+c+d+"<br>");

    } else if (i % valOne == 0){
      str += (i +" "+a+"<br>");
    } else if (i % valTwo == 0){
      str += (i +" "+b+"<br>");
    } else if (i % valThr == 0){
      str += (i +" "+c+"<br>");
    } else if (i % valFour == 0){
      str += (i +" "+d+"<br>");

    } else {
      str += (i+"<br>");
    }
  }
  return str;
}

outputEl = $("#output");
submitEl = $("#submit");

submitEl.click(function(){
  totalEl  = $("#max").val();
  valOneEl = $("#num0").val();
  valTwoEl = $("#num1").val();
  valThrEl = $("#num2").val();
  valFourEl= $("#num3").val();

  textOneEl = $("#text0").val();
  textTwoEl = $("#text1").val();
  textThrEl = $("#text2").val();
  textFourEl= $("#text3").val();

  console.log(totalEl);
  outputEl.html(mod(totalEl, valOneEl, valTwoEl, valThrEl, valFourEl, textOneEl, textTwoEl, textThrEl, textFourEl));
})
