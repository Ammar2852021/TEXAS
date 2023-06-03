function calculateDaysBetweenDates(startDate, endDate) {
  var start = new Date(startDate);
  var end = new Date(endDate);

  var timeDiff = Math.abs(end - start);

  var days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  return days;
}

let days = calculateDaysBetweenDates(
  localStorage.getItem("pickup_date"),
  localStorage.getItem("drop_off_date")
);

let total = document.getElementById("total"),
  car_name = document.getElementById("car_name"),
  car_type = document.getElementById("car_type"),
  selectedCar = JSON.parse(localStorage.getItem("selectedCar"));
if (selectedCar) {
  total.innerText = selectedCar.car_cost * days + " $";
  car_name.innerText = selectedCar.car_name;
  car_type.innerText = "or similar | " + selectedCar.car_type;
} else {
  location.href = "Cars.html";
}
