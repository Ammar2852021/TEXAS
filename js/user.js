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
let name_ = document.getElementById("name_"),
  name = document.getElementById("name");
(email = document.getElementById("email")),
  (id = document.getElementById("id")),
  (phone = document.getElementById("phone"));

name_.innerText = JSON.parse(user).name;
name.value = JSON.parse(user).name;
email.value = JSON.parse(user).email;
phone.value = JSON.parse(user).phone;
id.value = JSON.parse(user).id;
