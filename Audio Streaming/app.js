'use strict';

// ELEMENT TOGGLE FUNCTION

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }

// NAVBAR VARIABLES

const navbar = document.querySelector("[data-navbar]");
const navbarOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbarCloseBtn = document.querySelector("[data-nav-close-btn]");

navbarOpenBtn.addEventListener("click", function () {
  elemToggleFunc(navbar);
});

navbarCloseBtn.addEventListener("click", function () {
  elemToggleFunc(navbar);
});

// GO TO TOP VARIABLES

const goTopBtn = document.querySelector("[data-go-top]");

// WINDOW SCROLL EVENT FOR GO TO TOP
window.addEventListener("scroll", function () {

  if (this.window.scrollY >= 500) {
    goTopBtn.classList.add("active");
  } else {
    goTopBtn.classList.remove("active");
  }

});