import Swiper from "swiper/swiper-bundle.min";

new Swiper("#home-slider", {
  loop: true,
  grabCursor: true,
  effect: "fade",
  lazy: true,

  // If we need pagination
  pagination: {
    el: ".home-slider-pagination",
    clickable: true,
  },
});

new Swiper("#portfolio-slider", {
  slidesPerView: 5,
  spaceBetween: 10,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});
