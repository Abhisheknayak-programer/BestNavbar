const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav__links");
burger.addEventListener("click", function () {
  navLinks.classList.toggle("navBarActive");
  burger.classList.toggle("toggle");
});
