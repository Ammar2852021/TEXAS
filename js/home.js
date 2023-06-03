let Address = document.getElementById('Address');

let suggestions = document.getElementById('suggestions');
let Arr = [4554,156456,1,45,564,45];

Arr.forEach(function(e){
    suggestions.innerHTML+= `<option>${e}</option>`
})


Address.addEventListener('input',function(e)
{
    console.log(e.target.value);
})



