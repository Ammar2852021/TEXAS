let imgcars = document.querySelectorAll(".imgcars");

let xboximg = document.getElementById("xbox-img");

imgcars.forEach((ee) => {
  ee.addEventListener("click", function () {
    xboximg.src = ee.src;
  });
});

// // .........................
// input date
let dat = document.querySelectorAll(".date");
const now = new Date();
const year = now.getFullYear();
const month =
  now.getMonth().toString().length === 1
    ? `0${(now.getMonth() + 1).toString()}`
    : now.getMonth() + 1;
const date =
  now.getDate().toString().length === 1
    ? `0${now.getDate().toString()}`
    : now.getDate();
const formattedDate = `${year}-${month}-${date}`;
dat[0].value = formattedDate
dat[1].value = formattedDate

// // .........................
// input time
let time = document.querySelectorAll(".time");
const hours =
  now.getHours().toString().length === 1
    ? `0${now.getHours().toString()}`
    : now.getHours();
const minutes =
  now.getMinutes().toString().length === 1
    ? `0${now.getMinutes().toString()}`
    : now.getMinutes();
const formattTime = `${hours}:${minutes}`;
time[0].value = formattTime
time[1].value = formattTime


