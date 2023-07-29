new Swiper("[data-slider-place]", {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1020: {
      slidesPerView: "auto",
      freeMode: true,
      spaceBetween: 30,
    },
    1720: {
      freeMode: false,
      slidesPerView: 2,
      spaceBetween: 20,
    }
  }
});
