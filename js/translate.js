let translate = document.getElementById("translate");

let htext = document.querySelectorAll('.tr');
let onlode = document.getElementById('on-lode')

window.onload=function()
{
    onlode.style.display='none';
}

let englishArray = [];
htext.forEach((text)=>{englishArray.push(text.innerText)})
console.log(translate);

// console.log()
function trans(arrOfLetters, fromLang,toLang) {
  fetch(
    `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${fromLang}&tl=${toLang}&dt=t&q=${encodeURIComponent(
        arrOfLetters.join("\n")
    )}`
  )
    .then((response) => response.json())
    .then((data) => {
      if (data && data[0] && data[0][0]) {
        const translatedArray = data[0].map((item) => item[0]);
        console.log(translatedArray);
        translatedArray.forEach((e,i)=>{
            htext[i].innerText = e;
        })
      } else {
        console.error("Failed to translate the array.");
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

translate.addEventListener("change", (e) => {
  if (e.target.value == 3) {
    //translate from en to ar
    trans(englishArray,'en','ar')
    
} else if (e.target.value == 2) {
    trans(englishArray,'ar','en');
  }
});