let imgcars = document.querySelectorAll('.imgcars');


let xboximg = document.getElementById('xbox-img');

imgcars.forEach((ee)=>{
  ee.addEventListener('click',function(){
    xboximg.src = ee.src
  })
})






// document
//   .querySelector(".menu-btn")
//   .addEventListener("click", () =>
//     document.querySelector(".main-menu").classList.toggle("show")
//   );

// //   .......................
// // Other important pens.
// // Map: https://codepen.io/themustafaomar/pen/ZEGJeZq
// // Dashboard: https://codepen.io/themustafaomar/pen/jLMPKm

// let dropdowns = document.querySelectorAll(".navbar .dropdown-toggler");
// let dropdownIsOpen = false;

// // Handle dropdown menues
// if (dropdowns.length) {
//   // Usually I don't recommend doing this (adding many event listeners to elements have the same handler)
//   // Instead use event delegation: https://javascript.info/event-delegation
//   // Why: https://gomakethings.com/why-event-delegation-is-a-better-way-to-listen-for-events-in-vanilla-js
//   // But since we only have two dropdowns, no problem with that.
//   dropdowns.forEach((dropdown) => {
//     dropdown.addEventListener("click", (event) => {
//       let target = document.querySelector(`#${event.target.dataset.dropdown}`);

//       if (target) {
//         if (target.classList.contains("show")) {
//           target.classList.remove("show");
//           dropdownIsOpen = false;
//         } else {
//           target.classList.add("show");
//           dropdownIsOpen = true;
//         }
//       }
//     });
//   });
// }

// // Handle closing dropdowns if a user clicked the body
// window.addEventListener("mouseup", (event) => {
//   if (dropdownIsOpen) {
//     dropdowns.forEach((dropdownButton) => {
//       let dropdown = document.querySelector(
//         `#${dropdownButton.dataset.dropdown}`
//       );
//       let targetIsDropdown = dropdown == event.target;

//       if (dropdownButton == event.target) {
//         return;
//       }

//       if (!targetIsDropdown && !dropdown.contains(event.target)) {
//         dropdown.classList.remove("show");
//       }
//     });
//   }
// });

// // Open links in mobiles
// function handleSmallScreens() {
//   document.querySelector(".navbar-toggler").addEventListener("click", () => {
//     let navbarMenu = document.querySelector(".navbar-menu");

//     if (!navbarMenu.classList.contains("active")) {
//       navbarMenu.classList.add("active");
//     } else {
//       navbarMenu.classList.remove("active");
//     }
//   });
// }

// handleSmallScreens();

// // .......................................

// let selectedLink = document.querySelector(".selectedLink");

// function checkActive() {
//   document.querySelectorAll("nav li").forEach((item) => {
//     console.log(item);
//     if (item.dataset.active == "true") {
//       selectedLink.style.transform = `translateX(${
//         item.offsetLeft + item.offsetWidth / 2 - 24 + "px"
//       })`;
//     }
//   });
// }

// document.querySelectorAll("nav li").forEach((item) => {
//   console.log(item.offsetLeft);
//   item.addEventListener("click", (e) => {
//     document.querySelectorAll("nav li").forEach((i) => {
//       i.dataset.active = "false";
//     });
//     e.currentTarget.dataset.active = "true";
//     checkActive();
//   });
// });

// checkActive();
let selectedLink = document.querySelector(".selectedLink");

function checkActive() {
  document.querySelectorAll("nav li").forEach((item) => {
    console.log(item);
    if (item.dataset.active == "true") {
      selectedLink.style.transform = `translateX(${
        item.offsetLeft + item.offsetWidth / 2 - 24 + "px"
      })`;
    }
  });
}

document.querySelectorAll("nav li").forEach((item) => {
  console.log(item.offsetLeft);
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

// let label = document.getElementById('label');
let testTrans = document.querySelectorAll(".testtran");
var textToTranslate = "";
for (let i of testTrans) {
  textToTranslate += i.innerHTML + "-"; // يجب استبدال هذا النص بالنص المراد ترجمته
}
let engLetter = "";

En.addEventListener("click", function () {
  // if (label.style.display == 'none') {
  //   labelEN.style.display == 'block'
  //   label.style.display = 'none';

  // }
  // else{
  //   labelEN.style.display == 'none'
  //   label.style.display = 'block';

  // }
  En.classList.toggle("ward");
  
  if(En.classList.value.includes('ward')){
    engLetter = textToTranslate;
    console.log(engLetter)
    trns()
  }
  else{
    for (let i = 0; i < testTrans.length; i++) {
      testTrans[i].innerHTML = engLetter.split("-")[i];
    }
    console.log(engLetter.split("-"))
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
    console.log(5);
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
