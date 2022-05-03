/*
 *Author: Makkenzie Zepeda
 *Created: April 30, 2022
 *Lab08: Anon Functions and Callbacks
 *License: Public Domain
 */

function multiply(x){
    return (x * 3);
}

var collect = [];
console.log("Lets create an array and play around with it!");
console.log("My array of numbers: ");
console.log("The results after multipling the array by 3:");
console.log("The results after dividing our array by 2: ");


//test fuction
console.log("What is 3*3? ", multiply(3));
console.log("what is 4*3? ", multiply(4));

//array of numbers
 var aNumberArray= [24, 10, 39, 2, 400, 60];
 console.log("My array of numbers:", aNumberArray);
 collect[0]=("<br>" + "My array of numbers: 24, 10, 39, 2, 400, 60");


//results of multipling my array by 3
var result = aNumberArray.map(multiply);
//should return the products of my array
console.log("What are the results after multipling by 3:", result);
collect[1]=("<br>"+"What are the results after multipling by 3: 72, 30, 117, 6, 1200, 180");

//results of dividng the new array of numbers by 2
var result = aNumberArray.map(function(x){
  return x/2;
})

//results of dividing by 2
console.log("Results after dividing our array by 2: ", result);
collect[2]=("<br>"+"Results after dividing our array by 2: 12, 5, 19.5, 1, 200, 30");


var outputEl = document.getElementById("output")
outputEl.innerHTML = collect;
