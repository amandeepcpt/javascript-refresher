// console.log("Local vs Session Storage!");

// localStorage.setItem("name", "aman");
// localStorage.getItem("name", "aman");
// localStorage.getItem("age", 20);
// localStorage.setItem("age", 20);
// localStorage.getItemItem("age");
// typeof localStorage.getItem("age");
// localStorage.getItem("age");
// localStorage.getItem("student", { id: 1, name: 'rahul' });

// localStorage.setItem("student", { id: 1, name: 'rahul' });

// localStorage.setItem("numbers", [1,2,3,4,5]);

// localStorage.getItemItem("numbers");
// localStorage.getItem("numbers");

var studentString = JSON.stringify({ id: 1, name: "rahul" });
localStorage.setItem("student", studentString);

typeof localStorage.getItem("student");

localStorage.getItem("student");

var student = JSON.parse(localStorage.getItem("student"));

var setLocalStorage = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

setLocalStorage("student", { id: 1, name: "rahul" });

setLocalStorage("student", { id: 2, name: "rahul" });

// helper
var getLocalStorage = (key) =>
  localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem("student"))
    : null;

getLocalStorage("student");
setLocalStorage("name", [1, 2, 3, 4, 5]);

localStorage.removeItem("student");

localStorage.clear();
