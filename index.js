const navMenu = document.querySelector(".navigation-menu");
const header = document.querySelector("header");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  header.classList.toggle("active");
});
