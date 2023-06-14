function calculateDaysBetweenDates(startDate, endDate) {
  // Convert the date strings to Date objects
  var start = new Date(startDate);
  var end = new Date(endDate);

  // Calculate the difference in milliseconds
  var timeDiff = Math.abs(end - start);

  // Convert the difference to days
  var days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  return days;
}
let pickup_date = localStorage.getItem("pickup_date");
let drop_off_date = localStorage.getItem("drop_off_date");
// ..............................
let days = calculateDaysBetweenDates(pickup_date, drop_off_date);
localStorage.setItem("days", days);
let carContainer = document.getElementById("carsContainer");
let con = document.getElementById("con");
let cars = [];
if (pickup_date != null && drop_off_date != null) {
  // <a href="../page/Choose-your.html" class="car-a" >
  getData(APIs.host + APIs.cars).then((data) => {
    data["data"].forEach((e) => {
      let str = APIs.host + "/public/" + e.image;
      let card = `
    <a href="../page/Choose-your.html" class="car-a" >
    <div class="card">
    <div class="ad" data-ele="carCard" data-car_name="${
      e.brand + " " + e.model
    }" data-cost="${e.cost}" data-car_type="${
        e.car_type
      }" data-img="${str}"  data-car_id="${e.id}"></div>
    <div class="card-titel" >
      <h2>${e.brand + " " + e.model}</h2>
      <p>${e.car_type}</p>
    </div>
    <div class="card-img">
      <img src="${str}" alt="" />
    </div>
    <div class="card-coo">
      <div class="o">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path
            fill="#191919"
            fill-rule="evenodd"
            d="M11.436 8.406C11.436 6.956 10.4 6 8.896 6c-1.402 0-2.46 1.047-2.46 2.406 0 1.413 1.11 2.594 2.46 2.594 1.445 0 2.54-1.09 2.54-2.594zm2 0c0 2.611-1.993 4.594-4.54 4.594-2.484 0-4.46-2.104-4.46-4.594C4.436 5.937 6.395 4 8.896 4c2.572 0 4.54 1.813 4.54 4.406zM3.373 19.351L1.5 18.65a16.48 16.48 0 011.002-2.14C3.382 14.945 4.268 14 5.436 14h7c1.169 0 2.054.944 2.934 2.51a16.731 16.731 0 011.003 2.139l-1.873.702c-.04-.11-.122-.311-.238-.575a14.57 14.57 0 00-.635-1.286c-.28-.498-.56-.905-.819-1.181-.21-.224-.353-.309-.372-.309h-7c-.019 0-.161.085-.372.309-.259.276-.538.683-.819 1.181a14.528 14.528 0 00-.872 1.861zM16.436 16v-2h2c1.169 0 2.054.944 2.934 2.51a16.731 16.731 0 011.003 2.139l-1.873.702c-.04-.11-.122-.311-.238-.575a14.57 14.57 0 00-.635-1.286c-.28-.498-.56-.905-.819-1.181-.21-.224-.353-.309-.372-.309h-2zm-2-10V4h1c2.152 0 4 2.053 4 4.5s-1.848 4.5-4 4.5h-1v-2h1c.998 0 2-1.114 2-2.5s-1.002-2.5-2-2.5h-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <h3>
          <span>${e.seats}</span> Seater
        </h3>
      </div>
      <div class="o">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path
            fill="#191919"
            fill-rule="evenodd"
            d="M8 2v2H6V2h2zm5 0v2h-2V2h2zm5 0v2h-2V2h2zM6 12V6h2v5h3V6h2v5h3V6h2v7h-5v5h-2v-5H8v5H6v-6zm2 8v2H6v-2h2zm5 0v2h-2v-2h2z"
            clip-rule="evenodd"
          ></path>
        </svg>

        <h3>
          <span></span>${e.transmission}
        </h3>
      </div>
      <div class="o">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path
            fill="#191919"
            fill-rule="evenodd"
            d="M7.757 11.343L6.382 9.968A8.952 8.952 0 0111 8.055V10h2V8.055a8.953 8.953 0 014.618 1.913l-1.375 1.375 1.414 1.414 1.375-1.375A8.953 8.953 0 0120.945 16H19v2h4v-1c0-3.037-1.232-5.789-3.222-7.778A10.969 10.969 0 0012 6a10.969 10.969 0 00-7.778 3.222A10.969 10.969 0 001 17v1h4v-2H3.055a8.952 8.952 0 011.913-4.618l1.375 1.375 1.414-1.414zM10 17c0-.179.024-.353.068-.518l-2.775-2.775 1.414-1.414 2.775 2.775A2 2 0 0114 17v1h-4v-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <h3>
          <span>incl</span>1,400 Km
        </h3>
      </div>
      <div class="o">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="#191919" fill-rule="evenodd" d="M16 8H8v11h8V8zm2 0v11h2V8h-2zM6 8H4v11h2V8zm2-2V3h8v3h6v15H2V6h6zm2 0h4V5h-4v1z" clip-rule="evenodd"></path></svg>
        <h3>
        <span>${e.seats}</span> Bags
        </h3>
      </div>
      
    </div>
    <div class="card-salre">
      <h2 style="color: #003f82">$${e.cost} /day</h2>
      <h2>$${e.cost * days} /total</h2>
    </div>
  </div>
  </a>    
      `;
      carContainer.innerHTML += card;
    });
    cars = data["data"];
  });
} else {
  let alert = document.getElementById("alert");
  alert.innerHTML = "You Must Select Both Of Pickup Date and Drop Off Date";
  con.style.display = "none";
}

// ............... R E S

let responsicons = document.getElementById("responsicons");

let exit = document.getElementById("exit");

responsicons.addEventListener("click", function () {
  con.style.display = "block";
});

exit.addEventListener("click", function () {
  con.style.display = "none";
});

// Filter
function handleCarType(type) {
  carContainer.innerHTML = " ";
  cars.forEach((e) => {
    if (e.car_type === type) {
      let str = APIs.host + "/public/" + e.image;
      let card = `
    <a href="../page/Choose-your.html">
    <div class="card">
    <div class="ad" data-ele="carCard" data-car_name="${
      e.brand + " " + e.model
    }" data-cost="${e.cost}" data-car_type="${
        e.car_type
      }" data-img="${str}"  data-car_id="${e.id}"></div>
    <div class="card-titel">
      <h2>${e.brand + " " + e.model}</h2>
      <p>${e.car_type}</p>
    </div>
    <div class="card-img">
      <img src="${str}" alt="" />
    </div>
    <div class="card-coo">
      <div class="o">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path
            fill="#191919"
            fill-rule="evenodd"
            d="M11.436 8.406C11.436 6.956 10.4 6 8.896 6c-1.402 0-2.46 1.047-2.46 2.406 0 1.413 1.11 2.594 2.46 2.594 1.445 0 2.54-1.09 2.54-2.594zm2 0c0 2.611-1.993 4.594-4.54 4.594-2.484 0-4.46-2.104-4.46-4.594C4.436 5.937 6.395 4 8.896 4c2.572 0 4.54 1.813 4.54 4.406zM3.373 19.351L1.5 18.65a16.48 16.48 0 011.002-2.14C3.382 14.945 4.268 14 5.436 14h7c1.169 0 2.054.944 2.934 2.51a16.731 16.731 0 011.003 2.139l-1.873.702c-.04-.11-.122-.311-.238-.575a14.57 14.57 0 00-.635-1.286c-.28-.498-.56-.905-.819-1.181-.21-.224-.353-.309-.372-.309h-7c-.019 0-.161.085-.372.309-.259.276-.538.683-.819 1.181a14.528 14.528 0 00-.872 1.861zM16.436 16v-2h2c1.169 0 2.054.944 2.934 2.51a16.731 16.731 0 011.003 2.139l-1.873.702c-.04-.11-.122-.311-.238-.575a14.57 14.57 0 00-.635-1.286c-.28-.498-.56-.905-.819-1.181-.21-.224-.353-.309-.372-.309h-2zm-2-10V4h1c2.152 0 4 2.053 4 4.5s-1.848 4.5-4 4.5h-1v-2h1c.998 0 2-1.114 2-2.5s-1.002-2.5-2-2.5h-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <h3>
          <span>${e.seats}</span> Seater
        </h3>
      </div>
      <div class="o">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path
            fill="#191919"
            fill-rule="evenodd"
            d="M8 2v2H6V2h2zm5 0v2h-2V2h2zm5 0v2h-2V2h2zM6 12V6h2v5h3V6h2v5h3V6h2v7h-5v5h-2v-5H8v5H6v-6zm2 8v2H6v-2h2zm5 0v2h-2v-2h2z"
            clip-rule="evenodd"
          ></path>
        </svg>

        <h3>
          <span></span>${e.transmission}
        </h3>
      </div>
      <div class="o">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path
            fill="#191919"
            fill-rule="evenodd"
            d="M7.757 11.343L6.382 9.968A8.952 8.952 0 0111 8.055V10h2V8.055a8.953 8.953 0 014.618 1.913l-1.375 1.375 1.414 1.414 1.375-1.375A8.953 8.953 0 0120.945 16H19v2h4v-1c0-3.037-1.232-5.789-3.222-7.778A10.969 10.969 0 0012 6a10.969 10.969 0 00-7.778 3.222A10.969 10.969 0 001 17v1h4v-2H3.055a8.952 8.952 0 011.913-4.618l1.375 1.375 1.414-1.414zM10 17c0-.179.024-.353.068-.518l-2.775-2.775 1.414-1.414 2.775 2.775A2 2 0 0114 17v1h-4v-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <h3>
          <span>incl</span>1,400 Km
        </h3>
      </div>
      <div class="o">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path
            fill="#191919"
            fill-rule="evenodd"
            d="M4 11h3v3H4v-3zm6.5 0h3v3h-3v-3zm6.5 0h3v3h-3v-3z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <h3>
          <span></span> More
        </h3>
      </div>
    </div>
    <div class="card-salre">
      <h2 style="color: #003f82">$${e.cost} /day</h2>
      <h2>$${e.cost * days} /total</h2>
    </div>
  </div>
  </a>    
      `;
      carContainer.innerHTML += card;
    }
  });
}
let sedan = document.getElementById("sedan");
sedan.addEventListener("click", (e) => {
  e.preventDefault();
  handleCarType("Sedan");
});
let suv = document.getElementById("suv");
suv.addEventListener("click", (e) => {
  e.preventDefault();
  handleCarType("SUV");
});
let luxury_vehicle = document.getElementById("luxury_vehicle");
luxury_vehicle.addEventListener("click", (e) => {
  e.preventDefault();
  handleCarType("Luxury Vehicle");
});

// Automatic only
let automatic_only = document.getElementById("automatic_only");

function handleAutoOnly(status) {
  carContainer.innerHTML = " ";
  cars.forEach((e) => {
    if (status) {
      if (e.transmission === "Automatic") {
        let str = APIs.host + "/public/" + e.image;
        let card = `
        <a href="../page/Choose-your.html">
        <div class="card">
        <div class="ad" data-ele="carCard" data-car_name="${
          e.brand + " " + e.model
        }" data-cost="${e.cost}" data-car_type="${
          e.car_type
        }" data-img="${str}"  data-car_id="${e.id}"></div>
        <div class="card-titel">
      <h2>${e.brand + " " + e.model}</h2>
      <p>${e.car_type}</p>
    </div>
    <div class="card-img">
      <img src="${str}" alt="" />
    </div>
    <div class="card-coo">
      <div class="o">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path
            fill="#191919"
            fill-rule="evenodd"
            d="M11.436 8.406C11.436 6.956 10.4 6 8.896 6c-1.402 0-2.46 1.047-2.46 2.406 0 1.413 1.11 2.594 2.46 2.594 1.445 0 2.54-1.09 2.54-2.594zm2 0c0 2.611-1.993 4.594-4.54 4.594-2.484 0-4.46-2.104-4.46-4.594C4.436 5.937 6.395 4 8.896 4c2.572 0 4.54 1.813 4.54 4.406zM3.373 19.351L1.5 18.65a16.48 16.48 0 011.002-2.14C3.382 14.945 4.268 14 5.436 14h7c1.169 0 2.054.944 2.934 2.51a16.731 16.731 0 011.003 2.139l-1.873.702c-.04-.11-.122-.311-.238-.575a14.57 14.57 0 00-.635-1.286c-.28-.498-.56-.905-.819-1.181-.21-.224-.353-.309-.372-.309h-7c-.019 0-.161.085-.372.309-.259.276-.538.683-.819 1.181a14.528 14.528 0 00-.872 1.861zM16.436 16v-2h2c1.169 0 2.054.944 2.934 2.51a16.731 16.731 0 011.003 2.139l-1.873.702c-.04-.11-.122-.311-.238-.575a14.57 14.57 0 00-.635-1.286c-.28-.498-.56-.905-.819-1.181-.21-.224-.353-.309-.372-.309h-2zm-2-10V4h1c2.152 0 4 2.053 4 4.5s-1.848 4.5-4 4.5h-1v-2h1c.998 0 2-1.114 2-2.5s-1.002-2.5-2-2.5h-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <h3>
          <span>${e.seats}</span> Seater
        </h3>
      </div>
      <div class="o">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path
            fill="#191919"
            fill-rule="evenodd"
            d="M8 2v2H6V2h2zm5 0v2h-2V2h2zm5 0v2h-2V2h2zM6 12V6h2v5h3V6h2v5h3V6h2v7h-5v5h-2v-5H8v5H6v-6zm2 8v2H6v-2h2zm5 0v2h-2v-2h2z"
            clip-rule="evenodd"
          ></path>
        </svg>

        <h3>
          <span></span>${e.transmission}
        </h3>
      </div>
      <div class="o">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path
            fill="#191919"
            fill-rule="evenodd"
            d="M7.757 11.343L6.382 9.968A8.952 8.952 0 0111 8.055V10h2V8.055a8.953 8.953 0 014.618 1.913l-1.375 1.375 1.414 1.414 1.375-1.375A8.953 8.953 0 0120.945 16H19v2h4v-1c0-3.037-1.232-5.789-3.222-7.778A10.969 10.969 0 0012 6a10.969 10.969 0 00-7.778 3.222A10.969 10.969 0 001 17v1h4v-2H3.055a8.952 8.952 0 011.913-4.618l1.375 1.375 1.414-1.414zM10 17c0-.179.024-.353.068-.518l-2.775-2.775 1.414-1.414 2.775 2.775A2 2 0 0114 17v1h-4v-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <h3>
          <span>incl</span>1,400 Km
        </h3>
      </div>
      <div class="o">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path
            fill="#191919"
            fill-rule="evenodd"
            d="M4 11h3v3H4v-3zm6.5 0h3v3h-3v-3zm6.5 0h3v3h-3v-3z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <h3>
          <span></span> More
        </h3>
      </div>
    </div>
    <div class="card-salre">
      <h2 style="color: #003f82">$${e.cost} /day</h2>
      <h2>$${e.cost * days} /total</h2>
    </div>
  </div>
  </a>    
      `;
        carContainer.innerHTML += card;
      }
    } else {
      let str = APIs.host + "/public/" + e.image;
      let card = `
      <a href="../page/Choose-your.html">
      <div class="card">
      <div class="ad" data-ele="carCard" data-car_name="${
        e.brand + " " + e.model
      }" data-cost="${e.cost}" data-car_type="${
        e.car_type
      }" data-img="${str}"  data-car_id="${e.id}"></div>
      <div class="card-titel">
    <h2>${e.brand + " " + e.model}</h2>
    <p>${e.car_type}</p>
  </div>
  <div class="card-img">
    <img src="${str}" alt="" />
  </div>
  <div class="card-coo">
    <div class="o">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <path
          fill="#191919"
          fill-rule="evenodd"
          d="M11.436 8.406C11.436 6.956 10.4 6 8.896 6c-1.402 0-2.46 1.047-2.46 2.406 0 1.413 1.11 2.594 2.46 2.594 1.445 0 2.54-1.09 2.54-2.594zm2 0c0 2.611-1.993 4.594-4.54 4.594-2.484 0-4.46-2.104-4.46-4.594C4.436 5.937 6.395 4 8.896 4c2.572 0 4.54 1.813 4.54 4.406zM3.373 19.351L1.5 18.65a16.48 16.48 0 011.002-2.14C3.382 14.945 4.268 14 5.436 14h7c1.169 0 2.054.944 2.934 2.51a16.731 16.731 0 011.003 2.139l-1.873.702c-.04-.11-.122-.311-.238-.575a14.57 14.57 0 00-.635-1.286c-.28-.498-.56-.905-.819-1.181-.21-.224-.353-.309-.372-.309h-7c-.019 0-.161.085-.372.309-.259.276-.538.683-.819 1.181a14.528 14.528 0 00-.872 1.861zM16.436 16v-2h2c1.169 0 2.054.944 2.934 2.51a16.731 16.731 0 011.003 2.139l-1.873.702c-.04-.11-.122-.311-.238-.575a14.57 14.57 0 00-.635-1.286c-.28-.498-.56-.905-.819-1.181-.21-.224-.353-.309-.372-.309h-2zm-2-10V4h1c2.152 0 4 2.053 4 4.5s-1.848 4.5-4 4.5h-1v-2h1c.998 0 2-1.114 2-2.5s-1.002-2.5-2-2.5h-1z"
          clip-rule="evenodd"
        ></path>
      </svg>
      <h3>
        <span>${e.seats}</span> Seater
      </h3>
    </div>
    <div class="o">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <path
          fill="#191919"
          fill-rule="evenodd"
          d="M8 2v2H6V2h2zm5 0v2h-2V2h2zm5 0v2h-2V2h2zM6 12V6h2v5h3V6h2v5h3V6h2v7h-5v5h-2v-5H8v5H6v-6zm2 8v2H6v-2h2zm5 0v2h-2v-2h2z"
          clip-rule="evenodd"
        ></path>
      </svg>

      <h3>
        <span></span>${e.transmission}
      </h3>
    </div>
    <div class="o">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <path
          fill="#191919"
          fill-rule="evenodd"
          d="M7.757 11.343L6.382 9.968A8.952 8.952 0 0111 8.055V10h2V8.055a8.953 8.953 0 014.618 1.913l-1.375 1.375 1.414 1.414 1.375-1.375A8.953 8.953 0 0120.945 16H19v2h4v-1c0-3.037-1.232-5.789-3.222-7.778A10.969 10.969 0 0012 6a10.969 10.969 0 00-7.778 3.222A10.969 10.969 0 001 17v1h4v-2H3.055a8.952 8.952 0 011.913-4.618l1.375 1.375 1.414-1.414zM10 17c0-.179.024-.353.068-.518l-2.775-2.775 1.414-1.414 2.775 2.775A2 2 0 0114 17v1h-4v-1z"
          clip-rule="evenodd"
        ></path>
      </svg>
      <h3>
        <span>incl</span>1,400 Km
      </h3>
    </div>
    <div class="o">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <path
          fill="#191919"
          fill-rule="evenodd"
          d="M4 11h3v3H4v-3zm6.5 0h3v3h-3v-3zm6.5 0h3v3h-3v-3z"
          clip-rule="evenodd"
        ></path>
      </svg>
      <h3>
        <span></span> More
      </h3>
    </div>
  </div>
  <div class="card-salre">
    <h2 style="color: #003f82">$${e.cost} /day</h2>
    <h2>$${e.cost * days} /total</h2>
  </div>
</div>
</a>    
    `;
      carContainer.innerHTML += card;
    }
  });
}

automatic_only.addEventListener("change", () => {
  if (automatic_only.checked) {
    handleAutoOnly(true);
  } else {
    handleAutoOnly(false);
  }
});

// Passengers
function handleSeats(seats) {
  carContainer.innerHTML = " ";
  cars.forEach((e) => {
    if (e.seats <= seats) {
      let str = APIs.host + "/public/" + e.image;
      let card = `
    <a href="../page/Choose-your.html">
    <div class="card">
    <div class="ad" data-ele="carCard" data-car_name="${
      e.brand + " " + e.model
    }" data-cost="${e.cost}" data-car_type="${
        e.car_type
      }" data-img="${str}"  data-car_id="${e.id}"></div>
    <div class="card-titel">
      <h2>${e.brand + " " + e.model}</h2>
      <p>${e.car_type}</p>
    </div>
    <div class="card-img">
      <img src="${str}" alt="" />
    </div>
    <div class="card-coo">
      <div class="o">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path
            fill="#191919"
            fill-rule="evenodd"
            d="M11.436 8.406C11.436 6.956 10.4 6 8.896 6c-1.402 0-2.46 1.047-2.46 2.406 0 1.413 1.11 2.594 2.46 2.594 1.445 0 2.54-1.09 2.54-2.594zm2 0c0 2.611-1.993 4.594-4.54 4.594-2.484 0-4.46-2.104-4.46-4.594C4.436 5.937 6.395 4 8.896 4c2.572 0 4.54 1.813 4.54 4.406zM3.373 19.351L1.5 18.65a16.48 16.48 0 011.002-2.14C3.382 14.945 4.268 14 5.436 14h7c1.169 0 2.054.944 2.934 2.51a16.731 16.731 0 011.003 2.139l-1.873.702c-.04-.11-.122-.311-.238-.575a14.57 14.57 0 00-.635-1.286c-.28-.498-.56-.905-.819-1.181-.21-.224-.353-.309-.372-.309h-7c-.019 0-.161.085-.372.309-.259.276-.538.683-.819 1.181a14.528 14.528 0 00-.872 1.861zM16.436 16v-2h2c1.169 0 2.054.944 2.934 2.51a16.731 16.731 0 011.003 2.139l-1.873.702c-.04-.11-.122-.311-.238-.575a14.57 14.57 0 00-.635-1.286c-.28-.498-.56-.905-.819-1.181-.21-.224-.353-.309-.372-.309h-2zm-2-10V4h1c2.152 0 4 2.053 4 4.5s-1.848 4.5-4 4.5h-1v-2h1c.998 0 2-1.114 2-2.5s-1.002-2.5-2-2.5h-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <h3>
          <span>${e.seats}</span> Seater
        </h3>
      </div>
      <div class="o">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path
            fill="#191919"
            fill-rule="evenodd"
            d="M8 2v2H6V2h2zm5 0v2h-2V2h2zm5 0v2h-2V2h2zM6 12V6h2v5h3V6h2v5h3V6h2v7h-5v5h-2v-5H8v5H6v-6zm2 8v2H6v-2h2zm5 0v2h-2v-2h2z"
            clip-rule="evenodd"
          ></path>
        </svg>

        <h3>
          <span></span>${e.transmission}
        </h3>
      </div>
      <div class="o">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path
            fill="#191919"
            fill-rule="evenodd"
            d="M7.757 11.343L6.382 9.968A8.952 8.952 0 0111 8.055V10h2V8.055a8.953 8.953 0 014.618 1.913l-1.375 1.375 1.414 1.414 1.375-1.375A8.953 8.953 0 0120.945 16H19v2h4v-1c0-3.037-1.232-5.789-3.222-7.778A10.969 10.969 0 0012 6a10.969 10.969 0 00-7.778 3.222A10.969 10.969 0 001 17v1h4v-2H3.055a8.952 8.952 0 011.913-4.618l1.375 1.375 1.414-1.414zM10 17c0-.179.024-.353.068-.518l-2.775-2.775 1.414-1.414 2.775 2.775A2 2 0 0114 17v1h-4v-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <h3>
          <span>incl</span>1,400 Km
        </h3>
      </div>
      <div class="o">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path
            fill="#191919"
            fill-rule="evenodd"
            d="M4 11h3v3H4v-3zm6.5 0h3v3h-3v-3zm6.5 0h3v3h-3v-3z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <h3>
          <span></span> More
        </h3>
      </div>
    </div>
    <div class="card-salre">
      <h2 style="color: #003f82" >$${e.cost} /day</h2>
      <h2>$${e.cost * days} /total</h2>
    </div>
  </div>
  </a>    
      `;
      carContainer.innerHTML += card;
    }
  });
}
var range = document.getElementById("range");

range.addEventListener("change", (e) => {
  const value = Number(e.target.value);
  if (value <= 2) {
    handleSeats(value * 2);
  }
  if (value === 3) {
    handleSeats(value + 2);
  }
  if (value === 4) {
    handleSeats(value + 3);
  }
});
// Bags
function handleBags(bags) {
  carContainer.innerHTML = " ";
  cars.forEach((e) => {
    if (e.bags <= bags) {
      let str = APIs.host + "/public/" + e.image;
      let card = `
    <a href="../page/Choose-your.html">
    <div class="card">
    <div class="ad" data-ele="carCard" data-car_name="${
      e.brand + " " + e.model
    }" data-cost="${e.cost}" data-car_type="${
        e.car_type
      }" data-img="${str}"  data-car_id="${e.id}" ></div>
    <div class="card-titel">
      <h2>${e.brand + " " + e.model}</h2>
      <p>${e.car_type}</p>
    </div>
    <div class="card-img">
      <img src="${str}" alt="" />
    </div>
    <div class="card-coo">
      <div class="o">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path
            fill="#191919"
            fill-rule="evenodd"
            d="M11.436 8.406C11.436 6.956 10.4 6 8.896 6c-1.402 0-2.46 1.047-2.46 2.406 0 1.413 1.11 2.594 2.46 2.594 1.445 0 2.54-1.09 2.54-2.594zm2 0c0 2.611-1.993 4.594-4.54 4.594-2.484 0-4.46-2.104-4.46-4.594C4.436 5.937 6.395 4 8.896 4c2.572 0 4.54 1.813 4.54 4.406zM3.373 19.351L1.5 18.65a16.48 16.48 0 011.002-2.14C3.382 14.945 4.268 14 5.436 14h7c1.169 0 2.054.944 2.934 2.51a16.731 16.731 0 011.003 2.139l-1.873.702c-.04-.11-.122-.311-.238-.575a14.57 14.57 0 00-.635-1.286c-.28-.498-.56-.905-.819-1.181-.21-.224-.353-.309-.372-.309h-7c-.019 0-.161.085-.372.309-.259.276-.538.683-.819 1.181a14.528 14.528 0 00-.872 1.861zM16.436 16v-2h2c1.169 0 2.054.944 2.934 2.51a16.731 16.731 0 011.003 2.139l-1.873.702c-.04-.11-.122-.311-.238-.575a14.57 14.57 0 00-.635-1.286c-.28-.498-.56-.905-.819-1.181-.21-.224-.353-.309-.372-.309h-2zm-2-10V4h1c2.152 0 4 2.053 4 4.5s-1.848 4.5-4 4.5h-1v-2h1c.998 0 2-1.114 2-2.5s-1.002-2.5-2-2.5h-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <h3>
          <span>${e.seats}</span> Seater
        </h3>
      </div>
      <div class="o">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path
            fill="#191919"
            fill-rule="evenodd"
            d="M8 2v2H6V2h2zm5 0v2h-2V2h2zm5 0v2h-2V2h2zM6 12V6h2v5h3V6h2v5h3V6h2v7h-5v5h-2v-5H8v5H6v-6zm2 8v2H6v-2h2zm5 0v2h-2v-2h2z"
            clip-rule="evenodd"
          ></path>
        </svg>

        <h3>
          <span></span>${e.transmission}
        </h3>
      </div>
      <div class="o">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path
            fill="#191919"
            fill-rule="evenodd"
            d="M7.757 11.343L6.382 9.968A8.952 8.952 0 0111 8.055V10h2V8.055a8.953 8.953 0 014.618 1.913l-1.375 1.375 1.414 1.414 1.375-1.375A8.953 8.953 0 0120.945 16H19v2h4v-1c0-3.037-1.232-5.789-3.222-7.778A10.969 10.969 0 0012 6a10.969 10.969 0 00-7.778 3.222A10.969 10.969 0 001 17v1h4v-2H3.055a8.952 8.952 0 011.913-4.618l1.375 1.375 1.414-1.414zM10 17c0-.179.024-.353.068-.518l-2.775-2.775 1.414-1.414 2.775 2.775A2 2 0 0114 17v1h-4v-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <h3>
          <span>incl</span>1,400 Km
        </h3>
      </div>
      <div class="o">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path
            fill="#191919"
            fill-rule="evenodd"
            d="M4 11h3v3H4v-3zm6.5 0h3v3h-3v-3zm6.5 0h3v3h-3v-3z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <h3>
          <span></span> More
        </h3>
      </div>
    </div>*/
    <div class="card-salre">
      <h2 style="color: #003f82">$${e.cost} /day</h2>
      <h2>$${e.cost * days} /total</h2>
    </div>
  </div>
  </a>    
      `;
      carContainer.innerHTML += card;
    }
  });
}
let resetFilter = document.getElementById("resetFilter");
resetFilter.addEventListener("click", () => {
  location.reload();
});
let inputBage = document.getElementById("input-range");

inputBage.addEventListener("change", function (e) {
  handleBags(e.target.value);
});
// Select Car
window.addEventListener("click", (e) => {
  if (e.target.dataset.ele) {
    localStorage.setItem(
      "selectedCar",
      JSON.stringify({
        car_id: e.target.dataset.car_id,
        car_type: e.target.dataset.car_type,
        car_name: e.target.dataset.car_name,
        car_cost: Number(e.target.dataset.cost),
        image: e.target.dataset.img,
      })
    );
  }
});
let picA = document.getElementById("pickArea"),
  timeInfo = document.getElementById("timeInfo");
picA.innerText = localStorage.getItem("pickup_area");

function convertTo12Hour(time) {
  const timeParts = time.split(":");
  let hours = parseInt(timeParts[0]);
  const minutes = timeParts[1];
  let period = "AM";

  if (hours >= 12) {
    period = "PM";
    if (hours > 12) {
      hours -= 12;
    }
  }

  const convertedTime =
    hours.toString().padStart(2, "0") + ":" + minutes + " " + period;
  return convertedTime;
}

let picD = new Date(pickup_date);
const formattedPick = picD.toLocaleString("en-US", {
  month: "long",
  day: "numeric",
});
let picT = convertTo12Hour(localStorage.getItem("pickup_time"));
let dropD = new Date(drop_off_date);
const formattedDrop = dropD.toLocaleString("en-US", {
  month: "long",
  day: "numeric",
});
let dropT = convertTo12Hour(localStorage.getItem("drop_off_time"));

timeInfo.innerText =
  formattedPick + " | " + picT + " - " + formattedDrop + " | " + dropT;
