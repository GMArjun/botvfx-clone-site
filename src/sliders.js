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
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
    },
  },
});
