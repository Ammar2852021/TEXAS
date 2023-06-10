// let profile = document.getElementById('profile')
// let price = document.getElementById('price')

// let profileput = document.getElementById('profile-put')
// let priceput = document.getElementById('pricre-put')

// priceput.addEventListener('click',function()
// {
//     profile.style.display='none'
//     price.style.display='block'
// })

// profileput.addEventListener('click',function()
// {
//     profile.style.display='block'
//     price.style.display='none'
// })

// // profileput.style.display='none'
// // priceput.style.display='block'

// console.log(profile)
// console.log(price)
// console.log(profileput)
// console.log(priceput)
let user = localStorage.getItem("user");
if (!user) {
  location.href = "../index.html";
}
let access_token = localStorage.getItem("access_token");
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute("aria-expanded");

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute("aria-expanded", "false");
  }

  if (itemToggle == "false") {
    this.setAttribute("aria-expanded", "true");
  }
}

items.forEach((item) => item.addEventListener("click", toggleAccordion));

// ..................................................
let PROFILE = document.getElementById("PROFILE");

console.log(PROFILE);

let cick = document.getElementById("cick");

console.log(cick);

let MYPROFILE = document.getElementById("MYPROFILE");

console.log(MYPROFILE);

let clickher = document.getElementById("click-her");

console.log(clickher);

cick.addEventListener("click", function () {
  clickher.style.display = "block";
  MYPROFILE.style.display = "none";
});
// ...............................

PROFILE.addEventListener("click", function () {
  clickher.style.display = "none";
  MYPROFILE.style.display = "block";
});
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

let name_ = document.getElementById("name_"),
  nameF = document.getElementById("name"),
  email = document.getElementById("email"),
  id = document.getElementById("id"),
  phone = document.getElementById("phone"),
  password = document.getElementById("password"),
  editInfo = document.getElementById("editInfo");

function fillInfo() {
  name_.innerText = JSON.parse(user).name;
  nameF.value = JSON.parse(user).name;
  email.innerText = JSON.parse(user).email;
  phone.value = JSON.parse(user).phone;
  id.innerText = JSON.parse(user).id;
}
fillInfo();
editInfo.addEventListener("click", (e) => {
  e.preventDefault();
  let st = true;
  let data = {};
  if (nameF.value == "" || nameF.length < 8) {
    returnError("Name cannot empty Or less than 8 letters", "nameErr");
    st = false;
  } else {
    returnError("", "nameErr");
    data.name = nameF.value;
  }
  if (phone.value == "") {
    returnError("Phone Name Required", "phoneErr");
    st = false;
  }
  if (!isValidPhoneNumber(phone.value)) {
    returnError("Phone format is invalid", "phoneErr");
    st = false;
  } else {
    returnError("", "phoneErr");
    data.phone = phone.value;
  }
  if (password.value != "") {
    if (password.value.length < 8) {
      returnError("Password is too short", "passErr");
      st = false;
    } else {
      returnError("", "passErr");
      data.password = password.value;
    }
  }

  if (st) {
    postData(APIs.host + APIs.user.edit, data, access_token).then((data) => {
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: data["data"].user.name,
          email: data["data"].user.email,
          phone: data["data"].user.phone,
          id: data["data"].user.id_document,
        })
      );
      if (data["data"].user.email_verified_at == null) {
        localStorage.setItem("email_verify", false);
      }
      name_.innerText = data["data"].user.name;
      nameF.value = data["data"].user.name;
      email.innerText = data["data"].user.email;
      phone.value = data["data"].user.phone;
      id.innerText = data["data"].user.id_document;
      if (data.status === 201) {
        let success = document.getElementById("success_a");
        success.innerText = "Profile Updated Successfully";
        success.style.display = "block";
        setTimeout(() => {
          success.style.display = "none";
        }, 2000);
        password.value = "";
      } else {
        let success = document.getElementById("success_a");
        success.innerText = "Profile Updated Failed";
        success.style.backgroundColor = "red";
        success.style.display = "block";
        setTimeout(() => {
          success.style.display = "none";
        }, 2000);
      }
    });
  }
});
let ordersCon = document.getElementById("orders");
getData(APIs.host + APIs.user.orders, access_token).then((data) => {
  console.log(data);
  data["data"].forEach((e) => {
    let str = APIs.host + "/public/" + e.car.image;
    let details = "";
    e.order_details.forEach((e) => {
      details += `<tr>
      <td class="text-left">${e.title}</td>
      <td class="text-left">${e.period} days</td>
      <td class="text-left">${e.price} $</td>
      <td class="text-left">${e.price * e.period} $</td>
    </tr>`;
    });
    let order = `
    <div class="accordion" >
          <div class="accordion-item">
            <div class="buot">
              <div class="img"><img src="${str}" alt="" /></div>
              <div class="name-car">
                <h2>${e.car.brand + " " + e.car.model} </h2>
                <p>${e.car.car_type + " | " + e.car.transmission}</p>
              </div>
              <div class="total-price">
                <h2 class="price"><span>Total: </span>${e.total_cost}$</h2>
                ${
                  e.code
                    ? `<h2 class="price" style="font-size:12px;margin:0 15px"><span>Coupon: </span>${e.code}</h2>`
                    : null
                }
                
              </div>
              <div class="put">
                <button id="accordion-button-${e.id}" aria-expanded="false">
                  <span class="icon" aria-hidden="true"></span>
                </button>
                <div class="accordion-content">
                  <div class="table-title">
                    <h3>Data Table</h3>
                  </div>
                  <table class="table-fill">
                    <thead>
                      <tr>
                        <th class="text-left">Title</th>
                        <th class="text-left">Period</th>
                        <th class="text-left">Price</th>
                        <th class="text-left">Total</th>
                      </tr>
                    </thead>
                    <tbody class="table-hover">
                      ${details}
                    </tbody>
                  </table>
                </div>
                <!-- ................end-tebal -->
              </div>
            </div>
          </div>
        </div>
    `;
    ordersCon.innerHTML += order;
  });
});

/*




*/
