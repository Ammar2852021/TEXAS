let signUpForm = document.getElementById("sign_up_form"),
  signUpSubmit = document.getElementById("sign_up_submit");

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
  postData(APIs.host + APIs.user.register, data, null, "POST").then((data) => {
    console.log(data);
  });
});
