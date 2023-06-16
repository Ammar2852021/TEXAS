let translate = document.getElementById("translate");

let htext = document.querySelectorAll(".tr");

let ARB = document.getElementById("ARB");
let ENG = document.getElementById("ENG");

let ENGLANG2 = document.getElementById('ENGLANG-tr');
let ARBLANG2 = document.getElementById('ARBLANG-tr');

console.log(ENGLANG2);


ARB.addEventListener("change", function () {
  console.log("Ammar Ahmed mostaf");
});

let englishArray = [];
htext.forEach((text) => {
  englishArray.push(text.innerText);
});
function trans(arrOfLetters, fromLang, toLang) {
  fetch(
    `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${fromLang}&tl=${toLang}&dt=t&q=${encodeURIComponent(
      arrOfLetters.join("\n")
    )}`
  )
    .then((response) => response.json())
    .then((data) => {
      if (data && data[0] && data[0][0]) {
        const translatedArray = data[0].map((item) => item[0]);
        translatedArray.forEach((e, i) => {
          htext[i].innerText = e;
        });
      } else {
        console.error("Failed to translate the array.");
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

if (localStorage.getItem("lang")) {
  trans(englishArray, "en", "ar");
}

translate.addEventListener("change", (e) => {
  if (e.target.value == 3) {
    document.querySelector('.footer-middle').style.display='none'
    //translate from en to ar
    trans(englishArray, "en", "ar");
    localStorage.setItem("lang", "ar");
  } else if (e.target.value == 2) {
    document.querySelector('.footer-middle').style.display='block'
    trans(englishArray, "ar", "en");
    localStorage.removeItem("lang");
  }
});
