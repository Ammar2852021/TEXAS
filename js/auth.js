// Register
let signUpForm = document.getElementById("sign_up_form"),
  signUpSubmit = document.getElementById("sign_up_submit");

if (signUpSubmit)
  signUpSubmit.addEventListener("click", function (event) {
    event.preventDefault();

    // Accessing the form fields
    const firstName = signUpForm.elements["firstName"].value,
      lastName = signUpForm.elements["lastName"].value,
      email = signUpForm.elements["email"].value,
      phone = signUpForm.elements["phone"].value,
      password = signUpForm.elements["password"].value,
      password_confirm = signUpForm.elements["password_confirm"].value,
      id = signUpForm.elements["id"].value;

    let data = {
      name: firstName + " " + lastName,
      email: email,
      phone: phone,
      password: password,
      password_confirmation: password_confirm,
      id_document: id,
    };
    postData(APIs.host + APIs.user.register, data, null, "POST").then(
      (data) => {
        console.log(data);
      }
    );
  });
// Login
let loginForm = document.getElementById("loginForm");
let error = document.getElementById("error");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  var email = loginForm.elements["email"].value,
    password = loginForm.elements["password"].value;
  error.innerHTML = "";
  if (email == "") {
    error.innerHTML += `Email cannot be empty`;
    // error.innerHTML = "cd";
  } else if (password == "") {
    error.innerHTML += `Password cannot be empty`;
  } else {
    let data = {
      email: email,
      password: password,
    };

    postData(APIs.host + APIs.user.login, data).then((data) => {
      console.log(data);
      if (data.status === 200) {
        localStorage.setItem("access_token", data.access_token);
        location.href = "../index.html";
      } else if (data.status === 422) {
        error.innerText = data["data"].password[0];
        setTimeout(() => {
          error.innerText = "";
        }, 2000);
      } else if (data.status === 401) {
        error.innerHTML = `<span style="margin-bottom: 12px;
        background: #003f82;
        color: #ffffff;
        padding: 10px 16px;
        display: block;
        width: 83%;
        border-radius: 9px;"> Email Or Password is incorrect!</span>`;
        error.classList.add("d-block");
        setTimeout(() => {
          error.classList.remove("d-block");
        }, 2000);
      }
    });
  }
});
