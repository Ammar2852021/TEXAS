let Address = document.getElementById("Address");
if (Address) {
  let suggestions = document.getElementById("suggestions");
  let Arr = [4554, 156456, 1, 45, 564, 45];

  Arr.forEach(function (e) {
    suggestions.innerHTML += `<option>${e}</option>`;
  });

  Address.addEventListener("input", function (e) {
    console.log(e.target.value);
  });
}

function setDefaultDate(element) {
  var currentDate = new Date();
  var year = currentDate.getFullYear();
  var month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  var day = currentDate.getDate().toString().padStart(2, "0");
  var defaultDate = year + "-" + month + "-" + day;
  element.value = defaultDate;
}
function setDefaultTime(element) {
  var currentTime = new Date();
  var hours = currentTime.getHours().toString().padStart(2, "0");
  var minutes = currentTime.getMinutes().toString().padStart(2, "0");
  var defaultTime = hours + ":" + minutes;
  element.value = defaultTime;
}

// Pickup Date
var pickup_date = document.getElementById("pickup_date");
pickup_date.addEventListener("change", (e) => {
  localStorage.setItem("pickup_date", e.target.value);
});
var pickup_date_storage = localStorage.getItem("pickup_date");
if (pickup_date_storage !== null) {
  pickup_date.value = pickup_date_storage;
} else {
  setDefaultDate(pickup_date);
}

// Drop off Date
var drop_off_date = document.getElementById("drop_off_date");
drop_off_date.addEventListener("change", (e) => {
  localStorage.setItem("drop_off_date", e.target.value);
});
var drop_off_date_storage = localStorage.getItem("drop_off_date");
if (drop_off_date_storage !== null) {
  drop_off_date.value = drop_off_date_storage;
} else {
  setDefaultDate(drop_off_date);
}

// Pickup Time
var pickup_time = document.getElementById("pickup_time");
pickup_time.addEventListener("change", (e) => {
  localStorage.setItem("pickup_time", e.target.value);
});
var pickup_time_storage = localStorage.getItem("pickup_time");
if (pickup_time_storage !== null) {
  pickup_time.value = pickup_time_storage;
} else {
  setDefaultTime(pickup_time);
}

// Drop Off Time
var drop_off_time = document.getElementById("drop_off_time");
drop_off_time.addEventListener("change", (e) => {
  localStorage.setItem("drop_off_time", e.target.value);
});
var drop_off_time_storage = localStorage.getItem("drop_off_time");
if (drop_off_time_storage !== null) {
  drop_off_time.value = drop_off_time_storage;
} else {
  setDefaultTime(drop_off_time);
}
