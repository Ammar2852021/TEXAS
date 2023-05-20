let imgcars = document.querySelectorAll(".imgcars");

let xboximg = document.getElementById("xbox-img");

imgcars.forEach((ee) => {
  ee.addEventListener("click", function () {
    xboximg.src = ee.src;
  });
});

// // .........................


let de = document.getElementById("date");

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

de.value = formattedDate

