console.log("Data types");

// primitive data types

// let name = "Rahul";
// const age = 20;
// const isEven = false;

// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof isEven);

// // reference data type
// const student = {
//   name: "rahul",
//   age: 20,
//   id: 1,
// };
// const ages = [20, 22, 34];

// const fn = () => {
//   console.log("hi");
// };

// console.log(typeof student);
// console.log(typeof ages);
// console.log(typeof fn);

// console.log(Array.isArray(student), "is student arary");
// console.log(Array.isArray(ages), "is ages arary");

// let student = "Rahul";
// let teacher = student;
// teacher = "shivam";

// console.log(student);
// console.log(teacher);

// refernce data type
const student = {
  name: "rahul",
  age: 20,
  id: 1,
  hobbies: ["cricket", "hockey"],
};

// const teacher = student; // not creating a new copy for teacher,

// Object.assign() method
// const teacher = Object.assign({}, student);
// const teacher = JSON.parse(JSON.stringify(student));

// ES - 2022
const teacher = structuredClone(student);

// teacher.name = "shivam";
student.name = "shivam";
student.hobbies.push("swimming");

console.log(teacher, "teacher name");
console.log(student, "student name");
