var APIs = {
  host: "https://rentcar.yousef-mohamed.com",
  // host: "http://rent-car.io",
  cars: "/api/cars",
  members: "/api/members",
  social: "/api/get-information",
  orders: {
    get: "/api/user-orders",
    store: "/api/store-order",
  },
  user: {
    register: "/api/auth/user/register",
    login: "/api/auth/user/login",
    logout: "/api/auth/user/logout",
    profile: "/api/auth/user/user-profile",
    edit: "/api/auth/user/update",
    orders: "/api/user-orders",
    cancle: "/api/cancel-order",
  },
  coupon: {
    check: "/api/check-coupon",
  },
};
async function postData(url = "", data = {}, token = null) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: "Bearer " + token,
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
async function getData(url = "", token = "") {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Bearer " + token,
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  });
  return response.json(); // parses JSON response into native JavaScript objects
}
let guest = `
        <div class="user">
          <div class="zah-cixbgt bLHlxK">
             <a href="../page/Sign-Up.html">
                <div size="20" class="zah-1n3a2uw geyfOQ zah-qk49ma hgURmw">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path fill="#191919" fill-rule="evenodd" d="M20 12a8 8 0 00-8-8 8 8 0 00-6.568 12.569A1.999 1.999 0 016.829 16h10.063a2 2 0 011.554.74A7.965 7.965 0 0020 12zm-2.849 6.122a.34.34 0 00-.259-.12H6.83a.34.34 0 00-.101.015A7.97 7.97 0 0012 20c1.962 0 3.76-.706 5.151-1.878zM22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zM8 10a4 4 0 108 0 4 4 0 00-8 0zm6 0a2 2 0 11-4 0 2 2 0 014 0z" clip-rule="evenodd"></path>
                   </svg>
                </div>
                <span class="zah-12zumyu hAWciU heding"> <a  class="zah-12zumyu hAWciU heding" href="../page/log-in.html">Log in</a> <span style="margin: 0px 5px;">|</span>  <a  class="zah-12zumyu hAWciU heding"  href="../page/Sign-Up.html">Register</a></span>
             </a>
          </div>
       </div>`;

let userH = `
      <div class="user">
         <div class="zah-cixbgt bLHlxK">
            <a href="../page/user.html">
               <div size="20" class="zah-1n3a2uw geyfOQ zah-qk49ma hgURmw">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                     <path fill="#191919" fill-rule="evenodd" d="M20 12a8 8 0 00-8-8 8 8 0 00-6.568 12.569A1.999 1.999 0 016.829 16h10.063a2 2 0 011.554.74A7.965 7.965 0 0020 12zm-2.849 6.122a.34.34 0 00-.259-.12H6.83a.34.34 0 00-.101.015A7.97 7.97 0 0012 20c1.962 0 3.76-.706 5.151-1.878zM22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zM8 10a4 4 0 108 0 4 4 0 00-8 0zm6 0a2 2 0 11-4 0 2 2 0 014 0z" clip-rule="evenodd"></path>
                  </svg>
               </div>
            </a>
         </div>
      </div>


      <button id="log-out" style="background-color: transparent;">
       <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
         <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
         <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
       </svg>
     </button>`;
let authEle = document.getElementById("auth");
function checkToken() {
  fetch(APIs.host + APIs.user.profile, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("access_token"),
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  })
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      // console.clear();
      if (data.status !== 200) {
        authEle.insertAdjacentHTML("beforeend", guest);
        localStorage.removeItem("access_token");
        localStorage.removeItem("user");
      } else {
        localStorage.setItem(
          "user",
          JSON.stringify({
            name: data["data"].name,
            email: data["data"].email,
            phone: data["data"].phone,
            id: data["data"].id_document,
          })
        );
        if (data["data"].email_verified_at == null) {
          localStorage.setItem("email_verify", false);
        }
        authEle.insertAdjacentHTML("beforeend", userH);
      }
    });
}

checkToken();
let logout = document.getElementById("log-out");

logout.addEventListener("click", (e) => {
  e.preventDefault();
  postData(
    APIs.host + APIs.user.logout,
    null,
    localStorage.getItem("access_token")
  ).then((data) => {
    console.log(data);
  });
});
