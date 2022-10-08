console.log("Loops!");

// while
// let i = 0;
// while (i < 20) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
//   i++;
// }

// let i = 0;
// for (; i < 10 ; ) {
//   console.log(i);
//   i++;
// }

// for (let i = 0; i < 10; i++) {
//   console.log(i);
//   i++;
// }

// for of
// [
//  {name: "Audi"},
//  {name: "BWM"}
// ]
// var cars = ["Audi", "BMW", "Ford", "Mercedes"];
// for (let i = 0; i < 10; i++) {
//   console.log(cars[i]);
// }

// for (let car of cars) {
//   console.log(car);
// }

// for (let [i, car] of cars.entries()) {
//   if (i < 3) {
//     console.log(`${car} at ${i}`);
//   }
// }

// For In - Object as well as Arrays
// Array - iterable
// var cars = ["Audi", "BMW", "Ford", "Mercedes"];

// for (const i in cars) {
//   console.log(`${cars[i]} at index ${i}`);
//   if (i === 1) {
//     break;
//   }
//   // break and continue will not work
// }

// Object - enumerable
// var student = { id: 1, name: "rahul", age: 30 };

// for (const s in student) {
//   // console.log(`${cars[i]} at index ${car}`);
//   console.log(`${s} - ${student[s]}`);
//   // there is no concept of i
//   break;
//   // break statement will work
//   // continue will not
//   // continue;
// }
