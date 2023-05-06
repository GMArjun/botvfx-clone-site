import "bootstrap";
import sal from "sal.js";
import "./sliders";
import "../scss/style.scss";

// Show Loader Gracefully on Page Load
document.body.style.overflow = "hidden";
window.addEventListener("load", function () {
  var loader = document.getElementById("loading-indicator");
  loader.style.display = "none";
  document.body.style.overflow = "auto";
});

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
