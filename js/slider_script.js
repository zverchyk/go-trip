var swiper = new Swiper(".slider-body", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: -20,
      stretch: 0,
      depth: 10,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
        nextEl: '.swiper-button-prev',
        prevEl: '.swiper-button-next',
    }, 
 
  });

 // pagination="true" effect="coverflow" grab-cursor="true" centered-slides="true"
   // slides-per-view="auto" coverflow-effect-rotate="50" coverflow-effect-stretch="0" coverflow-effect-depth="100"
//   coverflow-effect-modifier="1" coverflow-effect-slide-shadows="true"///
