console.log("DOM Loaded!");

var headingElement = document.getElementById("heading");
console.dir(headingElement);
headingElement.style.color = "red";

var paragraphs = document.getElementsByClassName("paragraph");
console.log(paragraphs);
console.log(paragraphs.length);
// paragraphs[0].style.color = "blue";
// paragraphs[1].style.color = "blue";
// paragraphs[2].style.color = "blue";

for (var i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "blue";
  // paragraphs[i].innerText = "Paragraph " + i;
  paragraphs[i].innerHTML = "<h1>Paragraph</h1>";
}

// Query Selector
var linkElement = document.querySelectorAll("#link-container .link");

console.log(linkElement, "linkElement linkElement");

for (var i = 0; i < linkElement.length; i++) {
  linkElement[i].style.color = "black";
  linkElement[i].style.fontSize = "24px";
}

var googleElement = document.querySelector("#google-link");

googleElement.setAttribute("target", "_blank");
