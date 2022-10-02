console.log("EVENTS!");

var alertHello = (name) => alert(`Hello ${name}`);

var onFocus = () => {
  var inputElement = document.getElementById("input-element");
  inputElement.setAttribute("placeholder", "Please enter name now...");
  console.log("Element Focused!");
};

var onBlur = () => {
  var inputElement = document.getElementById("input-element");
  inputElement.setAttribute("placeholder", "Enter your name");
  console.log("Elemetn loses focus!");
};

var onTextAreaChange = (event) => {
  // var textAreaElement = document.getElementById("about-me");
  // textAreaElement.setAttribute();
  var text = event.target.value;
  var aboutMeParagraphElement = document.getElementById("about-me-paragraph");

  aboutMeParagraphElement.innerText = text;
};

var _name;

function onNameInputChange(event) {
  event.target.value;
}

function alertName() {
  alert(`Hello ${_name}`);
}

var onClickDiv = () => {
  console.log("Div is clicked!");
};

var onClickBtn = (event) => {
  // to solve event bubbling
  event.stopPropagation();
  console.log("Button is clicked!");
};

var sayHelloJavaScript = () => {
  alert("Hello JavaScript!");
};

// var buttonElement = document.getElementById("js-button");
document
  .getElementById("js-button")
  .addEventListener("click", sayHelloJavaScript);

var counterElement = document.getElementById("counter");
var count = 0;

document.getElementById("add-btn").addEventListener("click", () => {
  console.log("ADD");
  // getter
  // var value = counterElement.textContent;
  // var newValue = parseInt(value) + 1;
  // var newValue = Number(value) + 1;
  // var newValue = +value + 1;
  // var count = count + 1;
  count += 1;

  // setter
  counterElement.innerText = count;
});

document.getElementById("remove-btn").addEventListener("click", function () {
  console.log("SUBTRACT");
  var value = counterElement.textContent;
  // var newValue = value - 1;
  // var newValue = count - 1;
  count -= 1;

  counterElement.innerText = count;
});

// add and remove event list
var printBtn = document.getElementById("print-btn");

function onPrint() {
  console.log("Rahul is my name!");
}

printBtn.addEventListener("click", onPrint);

setTimeout(() => {
  // code i write here
  console.log("REMOVED EVENT LISTENER!");
  printBtn.removeEventListener("click", onPrint);
}, 5000);

// 1s = 1000

var studentArrowFn = {
  name: "Rahul",
  age: 20,
  printMyName: () => {
    console.log(this, "this keyword in arrow fn");
  },
};

studentArrowFn.printMyName();

var studentES5 = {
  name: "Rahul",
  age: 20,
  printMyName() {
    console.log(this, "this keyword inside es5");
  },
};

// arrow functions dont have their own this (keyword)

studentES5.printMyName();
