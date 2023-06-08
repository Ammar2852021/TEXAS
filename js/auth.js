// Register
let signUpForm = document.getElementById("sign_up_form"),
  signUpSubmit = document.getElementById("sign_up_submit"),
  errorReg = document.getElementById("error");
if (signUpSubmit) {
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

    function returnError(text) {
      let msg = `<span style="margin-bottom: 12px;
        background: #003f82;
        color: #ffffff;
        padding: 10px 16px;
        display: block;
        width: 83%;
        border-radius: 9px;">${text}!</span>`;
      return msg;
    }
    function isValidPhoneNumber(phone) {
      var phoneNumberRegex =
        /^\+?(\d{1,3})?\s?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})$/;
      return phoneNumberRegex.test(phone);
    }
    // function isValidNationalNumber(nationalNumber) {
    //   var nationalNumberRegex = /^[A-Za-z0-9]{6,12}$/;

    //   return nationalNumberRegex.test(nationalNumber);
    // }

    // function isValidPassportNumber(passportNumber) {
    //   var passportNumberRegex = /^(?:([A-Z\d])(?!.*\1)){5,20}$/;

    //   return passportNumberRegex.test(passportNumber);
    // }
    if (firstName == "") {
      error.innerHTML = returnError("First Name Required");
    } else if (lastName == "") {
      error.innerHTML = returnError("Last Name Required");
    } else if (email == "") {
      error.innerHTML = returnError("Email Name Required");
    } else if (phone == "") {
      error.innerHTML = returnError("Phone Name Required");
    } else if (!isValidPhoneNumber(phone)) {
      error.innerHTML = returnError("Phone format is invalid Required");
    } else if (password == "") {
      error.innerHTML = returnError("Password is Required");
    } else if (password.length < 8) {
      error.innerHTML = returnError("Password is too short");
    } else if (password_confirm != password) {
      error.innerHTML = returnError("Passwords do not match");
    } else if (id == "") {
      error.innerHTML = returnError("ID Or Passport number is Required");
    } else {
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
          if (data.status === 400) {
            if (data["data"].email != undefined) {
              error.innerHTML = returnError(data["data"].email[0]);
            } else if (data["data"].id_document != undefined) {
              error.innerHTML = returnError(data["data"].id_document[0]);
            } else if (data["data"].phone != undefined) {
              error.innerHTML = returnError(data["data"].phone[0]);
            }
          }
          if (data.status === 201) {
            location.href = "../page/log-in.html";
          }
        }
      );
    }
  });
}
// Login
let loginForm = document.getElementById("loginForm");
let error = document.getElementById("error");
if (loginForm) {
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
    } else if (password.length < 8) {
      error.innerHTML += `Password cannot less than 8 letters`;
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
}
