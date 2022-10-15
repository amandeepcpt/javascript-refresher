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

const DAYS = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};

const MONTH = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December",
};

const getFormattedDate = (date) => {
  const prependZero = (digit) => digit.toString().padStart(2, "0");

  // const date = new Date();
  const dayIndex = date.getDay();
  const monthIndex = date.getMonth();
  const day_name = DAYS[dayIndex];
  const month_name = MONTH[monthIndex];
  return `${day_name}, ${prependZero(
    date.getDate()
  )} ${month_name} ${date.getFullYear()}, ${prependZero(
    date.getHours()
  )}:${prependZero(date.getMinutes())}:${prependZero(date.getSeconds())}`;
};

console.log(getFormattedDate(new Date()));

const padStart = (digit = "") => digit.toString().padStart(2, "0");

// Saturday, 08 October 2022, 20:10:15
const today = new Date();
console.log(today.getFullYear(), "get day");
console.log(
  `${DAYS[today.getDay()]}, ${padStart(today.getDate())} ${
    MONTH[today.getMonth()]
  } ${today.getFullYear()}, ${padStart(today.getHours())}:${padStart(
    today.getMinutes()
  )}:${padStart(today.getSeconds())}`,
  "get day"
);

// date-fns
// moments
