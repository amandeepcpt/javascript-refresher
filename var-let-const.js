console.log("VAR LET CONST");

// var is function scoped
// let and const is block scoped

// var language = "javascript";
// language = "react";

// console.log(language);

// let language = "javascript";
// language = "react";

// console.log(language);

// const language = "javascript";
// language = "react";

// console.log(language);

{
  // it is called block
}

// function fn() {
//   // function block
//   // var language = "javascript";
//   if (true) {
//     var language = "javascript";
//   }

//   console.log(language, "language");
// }

// function fn() {
//   // function block
//   if (true) {
//     const language = "javascript";
//     // let language = "javascript";
//   }
//   console.log(language, "language");
// }

// fn();

// EcmaScript - Dont use var.

// var i = 1;

// for (var i = 0; i < 5; i++) {
//   console.log(`Iteration - ${i}`);
// }

// console.log(i, "WHAT??");

let i = 1;

for (let i = 0; i < 5; i++) {
  console.log(`Iteration - ${i}`);
}

console.log(i, "WHAT??");

// const PI = 3.14;

// how javascript works in terms of scoping?

// let day = "Sunday";

// if (true) {
//   let day = "Monday";
//   console.log(day, "Day Inside");
// }

// console.log(day, "Day Outside");

// Hoisting - Variable hoisting / function hoisting
// let and const are never hoisted
// var day = 'Sunday'
var day; // declaration
day = "Sunday"; // definition

// day = "Sunday";
// console.log(day, "Day");
// var day;

/**
 * var day;
 * day = "Sunday";
 * console.log(day, "Day");
 */

// day = "Sunday";
// console.log(day, "Day");
// const day;

// let day = "Sunday";
// let day = "Monday";
// console.log(day, "Day");

// function fn() {
//   var day1 = "Sunday";
//   console.log(day1 + " " + day2);
//   var day2 = "Monday";
// }

/**
 * var day1;
 * var day2;
 * day1 = "Sunday";
 * console.log(day1 + " " + day2);
 * day2 = "Monday";
 */

// function fn() {
//   let day1 = "Sunday";
//   console.log(day1 + " " + day2);
//   let day2 = "Monday";
// }

/**
 * let day1 = "Sunday";
 * console.log(day1 + " " + day2);
 * let day2 = "Monday";
 */

// fn();

// function hosting
// fn();

// function fn() {
//   console.log("I am called!");
// }

// fn();

// var fn = () => {
//   console.log("I am called!");
// };

/**
 * var fn;
 * fn();
 * fn = () => {
 *  console.log("I am called!");
 * };
 */

// fn();

// const fn = () => {
//   console.log("I am called!");
// };
