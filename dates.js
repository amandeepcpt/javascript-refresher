console.log("Date Object!");

var date = new Date();

console.log(date, "date");

// epoch - unix timestamp
var date = Date.now();

console.log(date);

// 1 January 1970

var date = new Date().getTime();
console.log(date);

var date = new Date(2015, 2, 18, 11, 50, 13);
// new Date(year, month, day, hour, minute, second);
console.log(date, "date");

// server ISO timestamp
// UTC GMT ---- ISO

var date = new Date().toISOString();

var day = new Date().getDay();
// 0 - Sunday, 6 - Saturday;
var date = new Date().getDate();
var month = new Date().getMonth();
var year = new Date().getFullYear();
var hours = new Date().getHours();
var minute = new Date().getMinutes();
var second = new Date().getSeconds();

console.log({
  day,
  date,
  month,
  year,
  hours,
  minute,
  second,
});

// Timezone
console.log(date, "iso date");

var dateFormat = new Date().toLocaleDateString();
var timeFormat = new Date().toLocaleTimeString();
console.log(dateFormat, "dateFormat");
console.log(timeFormat, "dateFormat");
