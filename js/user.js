
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


const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));