new Swiper("[data-product-slider]", {
  slidesPerView: "auto",
  spaceBetween: 20,
  freeMode: true,
  // loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1020: {
      spaceBetween: 30,
    },
    1430: {
      freeMode: false,
      slidesPerView: 5,
      spaceBetween: 0,
    }
  }
});
