const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");
const signUpMobileLink = document.getElementById("signUp-Mobile");
const signInMobileLink = document.getElementById("signIn-Mobile");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

signUpMobileLink.addEventListener("click", (event) => {
  event.preventDefault();
  document.getElementById("sign-up-container").style.display = "block";
  document.getElementById("sign-in-container").style.display = "none";
});

signInMobileLink.addEventListener("click", (event) => {
  event.preventDefault();
  document.getElementById("sign-in-container").style.display = "block";
  document.getElementById("sign-up-container").style.display = "none";
});
