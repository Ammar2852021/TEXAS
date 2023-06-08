let bordarclass = document.getElementById("bordar-class");
let protection_price = document.getElementById("protection_price");
let _price = 0;
let pr_price = 0;
getData(APIs.host + APIs.social).then((data) => {
  data["data"].forEach((e) => {
    if (e.key === "protection") {
      protection_price.innerText = `$ ${e.value} /day`;
      pr_price = e.value;
      _price = Number(total.innerText.replace(/\D/g, ""));
    }
  });
});
bordarclass.addEventListener("click", function () {
  bordarclass.classList.toggle("class");
  if (bordarclass.classList.contains("class")) {
    total.innerText = `${_price + Number(pr_price)}$`;
    localStorage.setItem("protection", true);
  } else {
    total.innerText = `${_price}$`;
    localStorage.removeItem("protection");
  }
});
