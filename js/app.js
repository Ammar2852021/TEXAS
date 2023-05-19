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

// // .........................

// let En = document.getElementById("terms-checkbox-37");

// let translatedText = document.getElementById("translatedText");
// let testAsfour = document.querySelector(".asfour");
// let testTrans = document.querySelectorAll(".testtran");
// var textToTranslate = "";
// for (let i of testTrans) {
//   textToTranslate += i.innerText + "-"; // يجب استبدال هذا النص بالنص المراد ترجمته
// }
// let engLetter = "";

// testAsfour.addEventListener('change',function(){
//   function trns() {
//     var xhr = new XMLHttpRequest();
//     var langPair = "en-ar"; // يجب تحديد الزوج اللغوي المراد استخدامه، وهنا هو اللغة الإنجليزية إلى العربية
//     var url =
//       "https://translate.googleapis.com/translate_a/single?client=gtx&sl=" +
//       langPair.split("-")[0] +
//       "&tl=" +
//       langPair.split("-")[1] +
//       "&dt=t&q=" +
//       encodeURI(textToTranslate);
//     xhr.open("GET", url);
//     xhr.onreadystatechange = function () {
//       if (xhr.readyState === 4 && xhr.status === 200) {
//         var response = JSON.parse(xhr.responseText);
//         for (let i = 0; i < testTrans.length; i++) {
//           testTrans[i].innerText = response[0][0][0].split("-")[i];
//         }
//       }
//     };
//     xhr.send();
//   }
//   if (testAsfour.value == '3') {
//     engLetter = textToTranslate;
//     trns();
//   } else {
//     for (let i = 0; i < testTrans.length; i++) {
//       console.log(engLetter)
//       testTrans[i].innerText = engLetter.split("-")[i];
//     }
//   }
// })

// // let label = document.getElementById('label');

// En.addEventListener("click", function () {


//   En.classList.toggle("ward");

//   if (En.classList.value.includes("ward")) {
//     engLetter = textToTranslate;
//     trns();
//   } else {
//     for (let i = 0; i < testTrans.length; i++) {
//       testTrans[i].innerText = engLetter.split("-")[i];
//     }
//   }
//   function trns() {
//     var xhr = new XMLHttpRequest();
//     var langPair = "en-ar"; // يجب تحديد الزوج اللغوي المراد استخدامه، وهنا هو اللغة الإنجليزية إلى العربية
//     var url =
//       "https://translate.googleapis.com/translate_a/single?client=gtx&sl=" +
//       langPair.split("-")[0] +
//       "&tl=" +
//       langPair.split("-")[1] +
//       "&dt=t&q=" +
//       encodeURI(textToTranslate);
//     xhr.open("GET", url);
//     xhr.onreadystatechange = function () {
//       if (xhr.readyState === 4 && xhr.status === 200) {
//         var response = JSON.parse(xhr.responseText);
//         for (let i = 0; i < testTrans.length; i++) {
//           testTrans[i].innerText = response[0][0][0].split("-")[i];
//         }
//       }
//     };
//     xhr.send();
//   }
// });


let asfour = document.getElementsByClassName('asfour');

let ENG = document.getElementById('ENG');

let ARB = document.getElementById('ARB');

let ENGLANG = document.getElementById('ENGLANG');

let ARBLANG = document.getElementById('ARBLANG');


asfour[0].addEventListener('change',function(){

  ARBLANG.style.display='block';

  ENGLANG.style.display='none';

})


asfour[1].addEventListener('change',function(){

  ARBLANG.style.display='none';

  ENGLANG.style.display='none';

})
