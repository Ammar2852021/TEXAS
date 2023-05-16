let imgcars = document.querySelectorAll(".imgcars");

let xboximg = document.getElementById("xbox-img");

imgcars.forEach((ee) => {
  ee.addEventListener("click", function () {
    xboximg.src = ee.src;
  });
});

let selectedLink = document.querySelector(".selectedLink");

function checkActive() {
  document.querySelectorAll("nav li").forEach((item) => {
    if (item.dataset.active == "true") {
      selectedLink.style.transform = `translateX(${
        item.offsetLeft + item.offsetWidth / 2 - 24 + "px"
      })`;
    }
  });
}

document.querySelectorAll("nav li").forEach((item) => {
  item.addEventListener("click", (e) => {
    document.querySelectorAll("nav li").forEach((i) => {
      i.dataset.active = "false";
    });
    e.currentTarget.dataset.active = "true";
    checkActive();
  });
});

checkActive();

// .........................

let En = document.getElementById("terms-checkbox-37");

let translatedText = document.getElementById("translatedText");
let testAsfour = document.querySelector(".asfour");
let testTrans = document.querySelectorAll(".testtran");
var textToTranslate = "";
for (let i of testTrans) {
  textToTranslate += i.innerHTML + "-"; // يجب استبدال هذا النص بالنص المراد ترجمته
}
let engLetter = "";

testAsfour.addEventListener('change',function(){
  function trns() {
    var xhr = new XMLHttpRequest();
    var langPair = "en-ar"; // يجب تحديد الزوج اللغوي المراد استخدامه، وهنا هو اللغة الإنجليزية إلى العربية
    var url =
      "https://translate.googleapis.com/translate_a/single?client=gtx&sl=" +
      langPair.split("-")[0] +
      "&tl=" +
      langPair.split("-")[1] +
      "&dt=t&q=" +
      encodeURI(textToTranslate);
    xhr.open("GET", url);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        for (let i = 0; i < testTrans.length; i++) {
          testTrans[i].innerHTML = response[0][0][0].split("-")[i];
        }
      }
    };
    xhr.send();
  }
  if (testAsfour.value == '3') {
    engLetter = textToTranslate;
    trns();
  } else {
    for (let i = 0; i < testTrans.length; i++) {
      testTrans[i].innerHTML = engLetter.split("-")[i];
    }
  }
})

// let label = document.getElementById('label');

En.addEventListener("click", function () {


  En.classList.toggle("ward");

  if (En.classList.value.includes("ward")) {
    engLetter = textToTranslate;
    trns();
  } else {
    for (let i = 0; i < testTrans.length; i++) {
      testTrans[i].innerHTML = engLetter.split("-")[i];
    }
  }
  function trns() {
    var xhr = new XMLHttpRequest();
    var langPair = "en-ar"; // يجب تحديد الزوج اللغوي المراد استخدامه، وهنا هو اللغة الإنجليزية إلى العربية
    var url =
      "https://translate.googleapis.com/translate_a/single?client=gtx&sl=" +
      langPair.split("-")[0] +
      "&tl=" +
      langPair.split("-")[1] +
      "&dt=t&q=" +
      encodeURI(textToTranslate);
    xhr.open("GET", url);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        for (let i = 0; i < testTrans.length; i++) {
          testTrans[i].innerHTML = response[0][0][0].split("-")[i];
        }
      }
    };
    xhr.send();
  }
});
