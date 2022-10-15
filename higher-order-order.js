console.log("Higher order function!");

var students = [
  { name: "John", grade: 8, gender: "M" },
  { name: "Sarah", grade: 12, gender: "F" },
  { name: "Bob", grade: 16, gender: "M" },
  { name: "Johnny", grade: 2, gender: "M" },
  { name: "Ethan", grade: 4, gender: "M" },
  { name: "Paula", grade: 18, gender: "F" },
  { name: "Donald", grade: 5, gender: "M" },
  { name: "Jennifer", grade: 13, gender: "F" },
  { name: "Courtney", grade: 15, gender: "F" },
  { name: "Jane", grade: 9, gender: "F" },
];

// foreach

// students.forEach(function() {

// });

// students.forEach((student, index, array) => {
//   console.log(array, "array");
//   console.log(`${student.name} at index ${index}`);
// });

// filter
// var filteredMaleStudent = students.filter((student) => {
//   return student.gender === "M";
// });
var filteredMaleStudent = students.filter(
  (student, index, array) => student.gender === "M"
);

// get unique elements based on gender property, -> array argument will be used

console.log(filteredMaleStudent, "filteredMaleStudent");
[
  // { name: "Jane", grade: 9, gender: "F", percentage: '33.33%' },
];

// var studentWithPercentage = students.map((student) => {
//   return {
//     name: student.name,
//     gender: student.gender,
//     marks: student.grade,
//     percentage: (student.grade / 20) * 100,
//   };
//   // return (student.percentage = (student.grade / 20) * 100);
// });

// var studentWithPercentage = students.map((student) => ({
//   name: student.name,
//   gender: student.gender,
//   marks: student.grade,
//   percentage: (student.grade / 20) * 100,
// }));

// var studentWithPercentage = students.map((student) => ({
//   ...student,
//   percentage: (student.grade / 20) * 100,
// }));

// console.log(studentWithPercentage, "studentWithPercentage");

// var someStudentHaveGradesGreaterThan15 = students.some(
//   (student) => student.grade > 15
// );

// var someStudentHaveGradesGreaterThan15 = students.every(
//   (student) => student.grade > 1
// );

// console.log(
//   someStudentHaveGradesGreaterThan15,
//   "someStudentHaveGradesGreaterThan15"
// );

// name: 'Rahul' & gender='M'

// var match = students.find(
//   (student) => student.name === "Sarah" && student.gender === "F"
// );

// console.log(match, "match");

// var matchIndex = students.findIndex(
//   (student, index, array) => student.name === "Donald" && student.gender === "M"
// );
// // not found - -1, >=)
// console.log(matchIndex, "match index");

const fruits = [
  { name: "Banana", price: 20 },
  { name: "Orange", price: 33 },
  { name: "Apple", price: 40 },
  { name: "Mango", price: 40 },
];

// total price??
// let price = 0;
// fruits.forEach((fruit) => {
//   price += fruit.price;
// });
// console.log(price, "total price");

// var totalPrice = fruits.reduce((acc, current) => {
//   // acc - 0
//   // acc - 20 + 33
//   // acc - 53
//   return acc + current.price;
// }, 0);
// console.log(totalPrice, "totalPrice");

// var totalGrades = students.reduce((acc, current) => {
//   return acc + current.grade;
// }, 10);

// console.log(totalGrades, "totalGrades");
{
}
// {
//  "boys_total_grades": 30,
//  "girls_total_grades": 45
// }
// {
//  "boys_total_grades": 8,
// }
// {
//  "boys_total_grades": 8,
// "girls_total_grades": 12,
// }

var op = students.reduce((acc, current) => {
  if (current.gender === "M") {
    acc["boys_total_grades"] = (acc.boys_total_grades || 0) + current.grade;
  } else {
    acc["girls_total_grades"] = (acc.girls_total_grades || 0) + current.grade;
  }
  return acc;
}, {});

console.log(op, "op");

// acc = {
//  boys_total_grades: 8
// }

// let obj = {};
// obj.boys_total_grades = 100;
// obj["girl_total_grades"] = 50;

// console.log(obj, "obj");

// Null and Undefined
var a;

var address = null;

if (null) {
  console.log("Yes");
}
if (undefined) {
  console.log("Yes");
}
if ("1") {
  console.log("Yes");
}
if ("0") {
  console.log("Yes");
}
if (0) {
  console.log("Yes");
}
if (1) {
  console.log("Yes");
}
if ([]) {
  console.log("Yes");
}
if ({}) {
  console.log("Yes");
}

// console.log(null);
// console.log(!null);
// console.log(!!null);
// console.log(undefined);
// console.log(!undefined);
// console.log(!!undefined);

[].push();
[].pop();
[].shift();
[].unshift();
[].includes();
[].slice(); // react
[].splice(); // react
[].indexOf();
[].lastIndexOf();
[].reverse();
[].flat();
// [].flatMap()
[].splice();
[].concat();
[].sort();

// keys();
// values();
// entries();

// var student = {
//  name: "rahul",
//  age: 20,
//  id: 1,
// };
// Object.keys(student);

// var student = {
//  name: "rahul",
//  age: 20,
//  id: 1,
// };
// Object.values(student);

// Object.keys(student).map(key => {
//  return `${key}: ${student[key]}`;
// });

// Object.entries(student).map((student) => {
//  const [key, value] = student;
//  return `${key}:${value}`
// });

// Optional Chaining (?.)

// var student = {
//   id: 1,
//   name: "Rahul",
//   address: {
//     // street: {
//     //   address_line_1: "Address line 1",
//     //   address_line_2: "Address line 2",
//     // },
//     state: "Punjab",
//     country: "India",
//   },
// };

// var address_line_1 =
//   student.address &&
//   student.address.street &&
//   student.address.street.address_line_1;

// var address_line_1 = student.address?.street?.address_line_1;
// console.log(address_line_1, "address line 1");

// var number = [
//   { id: 1, name: "Rahul1" },
//   // { id: 2, name: "Rahul2" },
// ];
// var elementAtIndex2 = number[5]?.name;
// console.log(elementAtIndex2, "elementAtIndex2");

// var fn;

// if (fn) {
//   fn();
// }

// fn?.();

// Nullish coalescing (??) ||

var movies = {
  name: "Avengers",
  price: 500,
  // total_ticket: 100,
  total_ticket: null,
  // total_ticket: 0,
};

// var total_ticket = movies.total_ticket ?? "N/A";
// var total_ticket =
//   movies.total_ticket === undefined || movies.total_ticket === null
//     ? "N/A"
//     : movies.total_ticket;

// only null or undefined
// ||
// ??

console.log(total_ticket, "total_ticket");
