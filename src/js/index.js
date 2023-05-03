import "bootstrap";
import sal from "sal.js";
import "./sliders";
import "../scss/style.scss";

sal({
  threshold: 1,
  once: true,
});

// Function to Add Scroll Animation to Header
const navbar = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.classList.add("header--scrolled");
  } else {
    navbar.classList.remove("header--scrolled");
  }
});
