localStorage.removeItem("protection");

let bordarclass = document.getElementById("bordar-class");
let protection_price = document.getElementById("protection_price");
let _price = 0;
let pr_price = 0;
getData(APIs.host + APIs.social).then((data) => {
  data["data"].forEach((e) => {
    if (protection_price) {
      if (e.key === "protection") {
        protection_price.innerText = `$ ${e.value} /day`;
        pr_price = e.value * Number(localStorage.getItem("days"));
        _price = Number(total.innerText.match(/[0-9.,]+/)[0]);
      }
    }
  });
});
bordarclass.addEventListener("click", function () {
  bordarclass.classList.toggle("class");
  if (protection_price) {
    if (bordarclass.classList.contains("class")) {
      total.innerText = `${_price + Number(pr_price)}$`;
      localStorage.setItem("protection", Math.ceil(pr_price));
    } else {
      total.innerText = `${_price}$`;
      localStorage.removeItem("protection");
    }
  }
});
var myArray = ["Aliaa Queen Airport", "مطار الملكة علياء"];
let an_lo = Number(localStorage.getItem("another_location"));
var target_pick = localStorage.getItem("pickup_area");
if (!myArray.includes(target_pick)) {
  total.innerText = `${Number(total.innerText.match(/[0-9.,]+/)[0]) + an_lo}$`;
}
var target_drop = localStorage.getItem("drop_off_area");
if (!myArray.includes(target_drop)) {
  total.innerText = `${Number(total.innerText.match(/[0-9.,]+/)[0]) + an_lo}$`;
}
