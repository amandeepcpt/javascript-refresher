console.log("FUNCTIONS!");

// function add(a, b) {
//   return a + b;
// }

var add = (a, b) => {
  // explict return
  var c = a + b;
  return c;
};

var add = (a, b) => a + b; // implicit return

var result = add(1, 3);
console.log(result, "result");

// Template literals

var age = 30;
var message = "My age is";

// var result1 = message + age;
var result1 = `${message} hello ${age}`;
console.log(result1);

// Exercise 3
Math.random();
Math.floor(Math.random()); // always gives 0

Math.random() * 2; // here 2 is the maximum num
Math.floor(Math.random() * 2);
Math.floor(Math.random() * 2) + 1;

var generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * max) + min;
};

generateRandomNumber(1, 100);

var number = 10;
console.log(number % 2, "number % 2");
var result = number % 2 === 0 ? "even" : "odd";

console.log(result, "number is what??");

var tL = `${number % 2 === 0 ? "even" : "odd"}`;
var tL = `${result}`;
console.log(tL, "template literal");

// even
// odd

// 0 -> false
// 1 or more -> true
// -1 or less -> true
// null -> false
// undefined -> false
