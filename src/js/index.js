import * as bootstrap from "bootstrap";
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

// Initiate Sal Scroll Animation
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

// Function to Set Swiper SLider on Home to fit Page Size;
const windowHeight = window.innerHeight;
const homeSliderContainer = [
  ...document.querySelectorAll("#home-slider .swiper-slide"),
];

homeSliderContainer.forEach((container) => {
  container.style.height = `${windowHeight}px`;
});

const sidebarLinks = document.querySelectorAll("#sidebar .nav-link");
const bsOffcanvas = new bootstrap.Offcanvas("#sidebar");

sidebarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    setTimeout(() => {
      bsOffcanvas.hide();
    }, 800);
  });
});
