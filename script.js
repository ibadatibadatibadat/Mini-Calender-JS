const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const today_date = new Date();
console.log(today_date);
const week_days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const all_months = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
date.innerHTML = (today_date.getDate() < 10 ? "0" : "") + today_date.getDate();
day.innerHTML = week_days[today_date.getDay()];
month.innerHTML = all_months[today_date.getMonth()];
year.innerHTML = today_date.getFullYear();
