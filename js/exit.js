    //   let cardcars = document.getElementById('card-cars');
    //   let carcardname=document.getElementById('car-card-name');
    //   cardcars.addEventListener('click',function()
    //   {
    //     carcardname.style.display='flex';
    //   })
    //   let exit = document.getElementById('exit');

    //   exit.addEventListener('click',function()
    //   {
    //     carcardname.style.display='none';
        
    //   })


    let buttonCar = document.getElementById('button-car');

    let CardName = document.getElementById('Card-Name');


    buttonCar.addEventListener('click',function()
    {
        CardName.style.display='block';

    })

    let exit = document.getElementById('exit');

      exit.addEventListener('click',function()
      {
        CardName.style.display='none';
        
      })