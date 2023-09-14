const galleryThumbs = new Swiper('[data-gallery-thumbs]', {
  spaceBetween: 30,
  slidesPerView: 5,
  direction: 'vertical',
  autoHeight: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  allowSlidePrev: true,
  allowSlideNext: true,
});

new Swiper('[data-gallery-top]', {
  slidesPerView: 'auto',

  breakpoints: {
    1430: {
      effect: "fade",
    }
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  thumbs: {
    swiper: galleryThumbs
  }
});
