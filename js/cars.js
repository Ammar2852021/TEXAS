// // .........................
// input date
let dat = document.querySelectorAll(".date");
const now = new Date();
const year = now.getFullYear();
const month =
  now.getMonth().toString().length === 1
    ? `0${(now.getMonth() + 1).toString()}`
    : now.getMonth() + 1;
const date =
  now.getDate().toString().length === 1
    ? `0${now.getDate().toString()}`
    : now.getDate();
const formattedDate = `${year}-${month}-${date}`;
dat[0].value = formattedDate;
dat[1].value = formattedDate;

// // .........................
// input time
let time = document.querySelectorAll(".time");
const hours =
  now.getHours().toString().length === 1
    ? `0${now.getHours().toString()}`
    : now.getHours();
const minutes =
  now.getMinutes().toString().length === 1
    ? `0${now.getMinutes().toString()}`
    : now.getMinutes();
const formattTime = `${hours}:${minutes}`;
time[0].value = formattTime;
time[1].value = formattTime;

// ..............................
let carContainer = document.getElementById("carsContainer");

getData(APIs.host + APIs.cars).then((data) => {
  let status = true;
  data["data"].forEach((e) => {
    let str = APIs.host + "/public/" + e.image;
    let card = `
      <div class="card">
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
      <h2>$${e.cost}/day</h2>
    </div>
  </div>`;

    carContainer.innerHTML += card;
  });
});
