"use strict";

function first() {
  // do smth
  setTimeout(function () {
    console.log(1);
  }, 500);
}

function second() {
  console.log(2);
}

first();
second();

function learnJS(lang, callback) {
  console.log(`I learn: ${lang}`);
  callback();
}

learnJS("JS", function () {
  console.log("I passed this lesson");
});

function done() {
  console.log("Woow!");
}

learnJS("Java", done);
