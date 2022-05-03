/*
 *Author: Makkenzie Zepeda
 *Created: April 30, 2022
 *Lab08: Anon Functions and Callbacks
 *License: Public Domain
 */

function multiply(x){
    return (x * 3);
}

//test fuction
console.log("What is 3*3? ", multiply(3));
console.log("what is 4*3? ", multiply(4));

//array of numbers
 var aNumberArray= [24, 10, 39, 2, 400, 60];
 console.log("My array of numbers:", aNumberArray);

//results of multipling my array by 3
var result = aNumberArray.map(multiply);
//should return the products of my array
console.log("What are the results after multipling by 3:", result);

//results of dividng the new array of numbers by 2
var result = aNumberArray.map(function(x){
  return x/2;
})

//results of dividing by 2
console.log("Results after dividing our array by 2: ", result);

//Task X Bonus: Output
//var outputEl = document.getElementById("Output Results");
//document.writeln("results: " +"<b>", multiply(outputEl), "</b>");
//outputEl.innerHTML = mapResults;
