const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const btn = document.querySelector("button");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
    btn.style.background = "red";
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Not a valid email");
    btn.style.background = "red";
  } else {
    setSuccessFor(email);
    btn.style.background = "green";
  }

  if (passwordValue === "") {
    setErrorFor(
      password,
      "Must contain atleast 1 upper 1lower 1 number 1 symbol & 8-12 chars"
    );
    btn.style.background = "red";
  } else {
    setSuccessFor(password);
    btn.style.background = "green";
  }

  if (password2Value === "") {
    setErrorFor(password2, "Password cannot be blank");
    btn.style.background = "red";
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2, "Passwords does not match");
    btn.style.background = "red";
  } else {
    setSuccessFor(password2);
    btn.style.background = "green";
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
