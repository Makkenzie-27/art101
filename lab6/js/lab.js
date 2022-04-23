/**
 *Author: Makkenzie Zepeda
 *Created: April 23, 2022
 *Lab06: Arrays and Objects
 *License: Public Domain
 */

// Define Variables
myTransport = ["car", "bike", "walking"];

myMainRide = {
  make: "Kia",
  model: "Sportage",
  color: "Silver",
  year: 2021,
  ownIt: true,
  age: function() {return 2022 - year;}
};

// output
document.writeln("Kinds of transportation I use: ", myTransport + "<br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
