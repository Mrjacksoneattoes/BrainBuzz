const loginForm = document.querySelector(".login__form");
const bothInputs = document.querySelectorAll(".input");
const labels = document.querySelectorAll(".label");
const errorMsgs = document.querySelectorAll(".error__msg");

loginForm.addEventListener("submit", (e) => {
  if (bothInputs[0].value === "") {
    errorMsgs[0].innerText = "Email can't be blank.";
    labels[0].style.color = "hsl(0, 100%, 66%)";
    bothInputs[0].style.border = "3px solid hsl(0, 100%, 66%)";
    e.preventDefault();
  }
  if (bothInputs[1].value.length <= 8) {
    errorMsgs[1].innerText = "Password must be at least 8 characters.";
    labels[1].style.color = "hsl(0, 100%, 66%)";
    bothInputs[1].style.border = "3px solid hsl(0, 100%, 66%)";
    e.preventDefault();
  }
  if (bothInputs[1].value === "") {
    errorMsgs[1].innerText = "Password can't be blank.";
    labels[1].style.color = "hsl(0, 100%, 66%)";
    bothInputs[1].style.border = "3px solid hsl(0, 100%, 66%)";
    e.preventDefault();
  }
});

bothInputs.forEach((input) => {
  input.addEventListener("input", () => {
    errorMsgs[0].innerText = "";
    labels[0].style.color = "white";
    bothInputs[0].style.border = "none";

    errorMsgs[1].innerText = "";
    labels[1].style.color = "white";
    bothInputs[1].style.border = "none";
  });
});
