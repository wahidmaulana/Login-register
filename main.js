//* hamburger menu

const hamburger = document.querySelector(".hamburger");
const navLink = document.querySelector(".nav-link");
const links = document.querySelectorAll(".nav-link li");

hamburger.addEventListener("click", () => {
  navLink.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
});

//! input events

const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const loginButton = document.querySelector(".btn-login");
const closeButton = document.querySelector(".close-btn");

registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});

loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

loginButton.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});

closeButton.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});
