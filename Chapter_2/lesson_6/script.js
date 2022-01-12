"use strict";

const num = "50";
num == 50 ? console.log("OK!") : console.log("Error");

switch (num) {
  case "45":
    console.log("forty five");
    break;
  case "63":
    console.log("sixty three");
    break;
  case "50":
    console.log("fifty");
    break;
  default:
    console.log("default");
    break;
}
