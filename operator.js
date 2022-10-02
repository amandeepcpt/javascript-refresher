// && ||

var name = null ? "rahul" : null;
var name = null && "rahul";

var name = null || "rahul";

var name = true && "rahul";

var name = true || "rahul";

var name = false || "rahul";

var name = true || "rahul";

var firstName = "rahul";
var name = firstName || "N/A";

var firstName = "";
var name = firstName || "N/A";

// Nullish coalescing (??)
var name = "";
// var result = name ?? null;
var result = name !== null ? (name === undefined ? null : result) : result;
// null || "" true false "string_name"
if (result === null) {
  // code generate new id
}
