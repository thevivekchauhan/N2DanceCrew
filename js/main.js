// Initialize Swiper
const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Initialize Fancybox
Fancybox.bind("[data-fancybox]", {
    Toolbar: {
        display: [
            { id: "prev", position: "center" },
            { id: "counter", position: "center" },
            { id: "next", position: "center" },
            "zoom",
            "slideshow",
            "fullscreen",
            "download",
            "close",
        ],
    },
});

// Testimonial Slider
$(document).ready(function(){
    $('.testimonial-slider').slick({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  });