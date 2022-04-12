const regBothName = /[A-Za-zА-Яа-яЁё]/;
const regEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
const regPass =
  /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/;

document.addEventListener("DOMContentLoaded", () => {
  const buttonSub = document.querySelector(".btn");
  const inputName = document.querySelector(".inputName");
  const inputLastName = document.querySelector(".inputLastName");
  const inputEmail = document.querySelector(".inputEmail");
  const inputPassword = document.querySelector(".inputPassword");
  const inputPassConfirm = document.querySelector(".inputPassConfirm");

  function validating(inputName, regex) {
    if (!validate(inputName.value, regex)) {
      notValid(inputName);
    } else {
      valid(inputName);
    }
  }

  function validate(nameValue, regex) {
    return regex.test(nameValue);
  }

  function valid(inputName) {
    inputName.classList.remove("is-invalid");
    inputName.classList.add("is-valid");
  }

  function notValid(inputName) {
    inputName.classList.add("is-invalid");
    inputName.classList.remove("is-valid");
  }

  buttonSub.onclick = function (e) {
    e.preventDefault();

    validating(inputName, regBothName);
    validating(inputLastName, regBothName);
    validating(inputEmail, regEmail);

    if (!validate(inputPassword.value, regPass)) {
      notValid(inputPassword);
    } else if (inputPassword.value === inputPassConfirm.value) {
      inputPassConfirm.classList.remove("is-invalid");
      inputPassConfirm.classList.add("is-valid");
      valid(inputPassword);
    } else {
      notValid(inputPassConfirm);
    }
  };
});
