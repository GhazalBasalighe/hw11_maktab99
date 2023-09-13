const signUpButton = document.querySelector(".sign-up-btn");
const signInButton = document.querySelector(".sign-in-btn");
const container = document.getElementById("container");

signInButton.addEventListener("click", () => {
  container.classList.add("overlay-is-active");
});
signUpButton.addEventListener("click", () => {
  container.classList.remove("overlay-is-active");
});
