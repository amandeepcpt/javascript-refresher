// Assignment Operator
var a = 5;

// a = a + 2;
// a += 2;
// a -= 2;
// a *= 2;
// a /= 2;
// a %= 2;
// a = a % 2;
// console.log(a);

// a = a ** 2;

// a **= 2;

console.log(a);

// arithmetic
// console.log(a++, "now a is");
// console.log(++a, "now a is");
// console.log(a--, "now a is");
// console.log(--a, "now a is");

// Comparison Operator

// <
// <=
// >
// >=
// ==
// ===
// !=
// !==

// 5 == '5'
// true
// 5 === '5'
// false
// 4 != '4'
// false
// 4 !== '4'
// true
// 4 != '4'
// false
// 4 !== '4'
// true

// &&
var a = 1,
  b = 5,
  c = 5,
  d = 10;
// a < b && c > d

// ||
// a < b || c > d
// !

// !null = true
// !undefined =  true
// !!null = false

// var student = {
//   id: 1,
//   name: 'aman',
// }

// if(student.age === null || student.age === "" || student.age === undefined) {
//   student.age = 0;
// }

// if(!student.age) {
//   student.age = 0;
// }

// Other operators
// , comma opeator
// let name = "aman";
// var result = (5 !== 5, typeof name === "string", true, 5);
// // (false, true, true, 5)
// console.log(result, "result");

// ? ternary operator
// console.log(10 % 2 === 0 ? true : false);
// console.log(10 % 2 === 0);
// console.log(10 % 2 === 0 ? "even" : "odd");

// typeof operator
// delete operator
// var student = {
//   id: 1,
//   name: "aman",
//   age: 20,
// };

// var ages = [20, 22, 24, 26];
// delete ages[2];
// delete student.age;
// console.log(student, "student after delete");

// var ages = [20, 22, 24, 26];
// delete ages[2];
// console.log(ages, "ages array");

// instanceof

// var student = {
//   id: 1,
//   name: "aman",
//   age: 20,
// };

// var ages = [20, 22, 24, 26];

// console.log(student instanceof Object);
// console.log(typeof ages);
// console.log(ages instanceof Object, "sssss");

// // hasOwnProperty
// // in operator

// console.log(
//   student.hasOwnProperty("age"),
//   "student has its own property named age"
// );
// console.log("age" in student, "age in student");

// var derivedStudentObject = Object.create(student);
// derivedStudentObject.course = "JavaScript";
// console.log(derivedStudentObject, "d object");

// console.log(derivedStudentObject.hasOwnProperty("age"), "res");
// console.log("age" in derivedStudentObject, "res");

// Swtich Case

// function getTodayDayName(dayIndex) {
//   let dayName;
//   switch (dayIndex) {
//     case 0:
//       dayName = "Sunday";
//       break;
//     case 1:
//       dayName = "Monday";
//       break;
//     case 2:
//       dayName = "Tuesday";
//       break;
//     case 3:
//       dayName = "Wednesday";
//       break;
//     case 4:
//       dayName = "Thursday";
//       break;
//     case 5:
//       dayName = "Friday";
//       break;
//     case 6:
//       dayName = "Saturday";
//       break;
//     default:
//       dayName = "Invalid input! Please enter week number between 1-7.";
//   }

//   return dayName;
// }

// function getTodayDayName(dayIndex) {
//   switch (dayIndex) {
//     case 0:
//       return "Sunday";
//     case 1:
//       return "Monday";
//     case 2:
//       return "Tuesday";
//     case 3:
//       return "Wednesday";
//     case 4:
//       return "Thursday";
//     case 5:
//       return "Friday";
//     case 6:
//       return "Saturday";
//     default:
//       return "Invalid input! Please enter week number between 1-7.";
//   }
// }
// var result = getTodayDayName(new Date().getDay());

// const DAYS = {
//   0: "Sunday",
//   1: "Monday",
//   2: "Tuesday",
//   3: "Wednesday",
//   4: "Thursday",
//   5: "Friday",
//   6: "Saturday",
// };

// var dayKey = new Date().getDay();
// console.log(dayKey);
// // DAYS[1]
// var result =
//   DAYS[dayKey] || "Invalid input! Please enter week number between 1-7.";

// console.log(result);

// Array Destructuring [] / Object Destructuring {} - creating a new variable and assigning a value to it

// var cars = ["Audi", "BMW", "Ford", "Mercedes"];
// var carAtFirstIndex = cars[1];
// console.log(carAtFirstIndex, "carAtFirstIndex");
// var abc;
// abc = cars[1];
// var [abc, def, qwerty, xyz, idontknow] = ["Audi", "BMW", "Ford", "Mercedes"];
// console.log(abc, "abc");
// console.log(def, "def");

// console.log(xyz, "xyz");
// console.log(qwerty, "qwerty");

// console.log(idontknow, "abc");

// var [audi, bmw, ford, mercedes, idontknow] = cars;
// console.log({
//   audi,
//   bmw,
//   ford,
//   mercedes,
//   idontknow,
// });

// console.log(bmw, "carAtFirstIndex");
// Object Destructuring -> creating a new variable and assigning a value to it
var student = {
  id: 1,
  name: "aman",
  age: 20,
};

var s_name = student.name;
console.log(s_name, "name__");

// student_name is the alaise
var { name: student_name } = student;
console.log(student_name, "name of student");

// REST AND SPREAD OPERATOR
// Spread Operator
// In Array
var set1 = [1, 2, 3, 4, 5];
// var set2 = set1;
// set2[2] = 10;

// creates a shallow copy
// var set2 = [...set1];
// var set2 = set1.slice();
// set2[2] = 10;
// console.log({ set1, set2 }, "op");

// merge two arrays into one
// var set2 = [6, 7, 8, 9, 10];
// console.log(set1, "set1");
// console.log(set2, "set2");
// var merged_set = [...set2, ...set1];
// console.log(merged_set, "op");

// // In Object
// // Create a shallow copy
// var student = { id: 1, name: "Rahul", age: 20 };
// // var student_copy = student;
// var student_copy = { ...student };
// student_copy["name"] = "Aman";

// console.log(student, "student");
// console.log(student_copy, "student_copy");

// Merge two object
// var student1 = { id: 1, name: "Rahul", age: 20 };
// var student2 = { id: 2, name: "Aman", age: 30 };

// var student_example = {
//   // id: 1,
//   // name: "Rahul",
//   // age: 20,
//   id: 2,
//   name: "Aman",
//   age: 30,
// };
// console.log(student_example, "student_example");

// var student_merge = { ...student1, ...student2 };
// console.log(student_merge);

// es5
function printArguments() {
  // ...array - rest operator
  console.log(arguments, "arguments");
  // console.log(array, "array");
}

var array = [1, 2, 3, 4, 5, "Rahul", "Aman"];

// spread opeator
printArguments(...array);

// Spread Operator
// function printArguments(...array) {
//   // ...array - rest operator
//   console.log(array, "array");
// }

// var array = [1, 2, 3, 4, 5, "Rahul", "Aman"];

// var student = { id: 1, name: "Rahul", age: 20 };
// // delete student.age
// // function removeAge({ age, ...rest }) {
// //   // delete stu.age;
// //   return rest;
// // }

// // var result = removeAge(student);

// var { age, ...rest } = student;
// console.log(student, "student 1");
// console.log(age, "age");
// console.log(rest, "result without age property!");

// Rest operator with Array
var number = [1, 2, 3, 4, 5];
var [first, ...rest] = number;
console.log(number, "number");
console.log(first, "first");
console.log(rest, "rest");

// Spread Operator - Array / Object
// Array
// ["Audi", "BMW", "Ford", "Mercedes"]
var cars1 = ["Audi", "BMW", "Ford", "Mercedes"];
var cars2 = cars1.slice();

// primitive data type
// var age1 = 28;
// copy
// var age2 = age1;
// age1 = 30;

// console.log({ age1, age2 });

// console.log({ cars1, cars2 });

cars2[1] = "New Car";
console.log({ cars1, cars2 });
