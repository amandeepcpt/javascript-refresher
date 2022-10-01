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
