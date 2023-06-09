function calculateDaysBetweenDates(startDate, endDate) {
  var start = new Date(startDate);
  var end = new Date(endDate);

  var timeDiff = Math.abs(end - start);

  var days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  return days;
}
let pickup_date = localStorage.getItem("pickup_date"),
  drop_off_date = localStorage.getItem("drop_off_date");
let days = calculateDaysBetweenDates(pickup_date, drop_off_date);

let total = document.getElementById("total"),
  car_name = document.getElementById("car_name"),
  car_type = document.getElementById("car_type"),
  car_image = document.getElementById("car_image"),
  rent_days = document.getElementById("days"),
  selectedCar = JSON.parse(localStorage.getItem("selectedCar"));
if (selectedCar) {
  total.innerText =
    selectedCar.car_cost * days +
    Number(localStorage.getItem("protection")) +
    " $";
  car_name.innerText = selectedCar.car_name;
  rent_days.innerText = `${days} rentel days`;
  car_image.src = selectedCar.image;
  car_type.innerText = "or similar | " + selectedCar.car_type;
} else {
  location.href = "Cars.html";
}
//
let infoE = `<h2>Please fill this information</h2>
<div class="flex">
  <label>
    <input required="" placeholder="First Name" name="firstName" type="text" class="input" />
    <span id="firErr"></span>
  </label>

  <label style="margin-left: 50px">
    <input required="" placeholder="Last Name" name="lastName" type="text" class="input" />
    <span id="lasErr"></span>
  </label>
</div>

<label>
  <input required="" placeholder="Email" name="email" type="email" class="input" />
  <span id="emailErr"></span>
</label>

<label>
  <input required="" type="tel" name="phone" placeholder="Contact number" class="input" />
  <span id="numErr"></span>
</label>
<label>
  <input required="" type="tel" placeholder="ID Or Passport Number" name="id" class="input" />
  <span id="idErr" ></span>
</label>

<div class="checkbox-wrapper-4">
  <input type="checkbox" id="morning" class="inp-cbx" />
  <label for="morning" class="cbx"
    ><span> <svg height="10px" width="12px"></svg></span
    ><span>Morning</span></label
  >
  <svg class="inline-svg">
    <symbol viewBox="0 0 12 10" id="check-4">
      <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
    </symbol>
  </svg>
</div>`;
let formInfo = document.getElementById("info");
let user = localStorage.getItem("user");
if (!user) {
  formInfo.insertAdjacentHTML("afterbegin", infoE);
}
let code = "";
let coupon = document.getElementById("coupon"),
  coupon_status = document.getElementById("coupon-status");
coupon.addEventListener("input", (e) => {
  if (e.target.value != "") {
    postData(APIs.host + APIs.coupon.check, { code: e.target.value }).then(
      (data) => {
        if (data.status === 400) {
          coupon_status.style.color = "red";
          coupon_status.innerText = "Coupon Invalid";
          console.clear();
        } else if (data.status === 201) {
          coupon_status.style.color = "green";
          coupon_status.innerText = "Coupon Valid";
          code = e.target.value;
        }
      }
    );
  } else {
    coupon_status.innerText = "";
  }
});
let success = `<div id="success" style="position: fixed;
                        width: 100%;
                        height: 100%;
                        background-color: rgba(0,0,0,0.4);
                        z-index: 1;
                        display: flex;
                        justify-content: center;
                        align-items: center;">
                    <span style="width: 60%;
                    padding: 10%;
                    background: green;
                    text-align: center;
                    color: white;">
                      Order Completed And We Will Call You As Soon As Possible,Thank You!     
                    </span>
                </div>`;
let complete_button = document.getElementById("send-order");
complete_button.addEventListener("click", (e) => {
  e.preventDefault();
  let order_details = [];
  let car = JSON.parse(localStorage.getItem("selectedCar"));
  let total = car.car_cost * days;
  order_details.push({
    title: `CAR: ${car.car_name}`,
    period: days,
    price: car.car_cost,
  });
  if (localStorage.getItem("protection")) {
    total += Number(localStorage.getItem("protection"));
    order_details.push({
      title: "Protection",
      price: Number(localStorage.getItem("protection")),
      period: days,
    });
  }
  if (localStorage.getItem("flixable")) {
    total += Number(localStorage.getItem("flixable"));
    order_details.push({
      title: "Flixable",
      price: Number(localStorage.getItem("flixable")),
      period: days,
    });
  }
  /*
    pickup_area: "pickup area",
    pickup_date: "2023-6-8",
    pickup_time: "13:00",
    drop_off_area: "drop_off_area",
    drop_off_date: "2023-6-10",
    drop_off_time: "13:00",
*/
  let pickup_time = localStorage.getItem("pickup_time"),
    drop_off_time = localStorage.getItem("drop_off_time"),
    drop_off_area = localStorage.getItem("pickup_area"),
    pickup_area = localStorage.getItem("pickup_area");
  let data = {
    car_id: Number(car.car_id),
    total_cost: Math.ceil(total),
    order_details: order_details,
  };
  // data.pickup_date
  // drop_off_date
  data.pickup_date = pickup_date;
  data.pickup_time = pickup_time;
  data.pickup_area = pickup_area;
  data.drop_off_date = drop_off_date;
  data.drop_off_time = drop_off_time;
  data.drop_off_area = drop_off_area;
  let access_token = "";

  let st = true;
  if (!user) {
    const firstName = formInfo.elements["firstName"].value,
      lastName = formInfo.elements["lastName"].value,
      email = formInfo.elements["email"].value,
      phone = formInfo.elements["phone"].value,
      id = formInfo.elements["id"].value;

    function returnError(text, id) {
      let ele = document.getElementById(id);
      let msg = `${text}`;
      ele.innerText = msg;
      ele.style.color = "red";
    }
    function isValidPhoneNumber(phone) {
      var phoneNumberRegex =
        /^\+?(\d{1,3})?\s?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})$/;
      return phoneNumberRegex.test(phone);
    }
    if (firstName == "") {
      returnError("First Name Required", "firErr");
      st = false;
    }
    if (lastName == "") {
      returnError("Last Name Required", "lasErr");
      st = false;
    }
    if (email == "") {
      returnError("Email Name Required", "emailErr");
      st = false;
    }
    if (phone == "") {
      returnError("Phone Name Required", "numErr");
      st = false;
    }
    if (!isValidPhoneNumber(phone)) {
      returnError("Phone format is invalid Required", "numErr");
      st = false;
    }
    if (id == "") {
      returnError("ID Or Passport number is Required", "idErr");
      st = false;
    }

    if (st) {
      data.order_by = firstName + " " + lastName;
      data.id_document = id;
      data.phone = phone;
      data.email = email;
    }
  } else {
    access_token = localStorage.getItem("access_token");
  }
  if (code != "") {
    data.code = code;
  }
  console.log(data);
  if (!user) {
    if (st) {
      postData(APIs.host + APIs.orders.store, data, access_token).then(
        (data) => {
          if (data.status === 201) {
            document.body.insertAdjacentHTML("afterbegin", success);
            let success_el = document.getElementById("success");
            setTimeout(() => {
              location.href = "../index.html";
              success_el.remove();
            }, 1500);
          }
        }
      );
    }
  } else {
    if (access_token != "") {
      postData(APIs.host + APIs.orders.store, data, access_token).then(
        (data) => {
          location.href = "../index.html";
          document.body.insertAdjacentHTML("afterbegin", success);
          let success_el = document.getElementById("success");
          setTimeout(() => {
            success_el.remove();
          }, 1500);
        }
      );
    }
  }
});
/*
// parent
    
    // SOn
        
*/
