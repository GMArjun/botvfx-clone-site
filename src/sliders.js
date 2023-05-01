import Swiper from "swiper/swiper-bundle.min";

new Swiper("#homeslider", {
  loop: true,
  grabCursor: true,
  effect: "fade",

  // If we need pagination
  pagination: {
    el: ".homeslider-pagination",
    clickable: true,
  },
});
