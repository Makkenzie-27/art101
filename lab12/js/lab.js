/*
 *Author: Makkenzie Zepeda
 *Created: May 15, 2022
 *Lab 12: Conditionals
 *License: Public Domain
 */

function sortingHat(str) {

  len = str.length;
  mod = len % 4;
  if (mod == 0) {
    return "Gryffindor"
  }

  else if (mod == 1) {
    return "Ravenclaw"
  }

  else if (mod == 2) {
    return "Slytherin"
  }

  else if (mod == 3) {
    return "Hufflepuff"
  }
}
