const track = document.querySelector(".slider-track");
const dots = document.querySelectorAll(".dot");
const slides = document.querySelectorAll(".slide");

let currentIndex = 0;
let interval;

function updateSlider() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;

  dots.forEach(dot => dot.classList.remove("active"));

  if (dots[currentIndex]) {
    dots[currentIndex].classList.add("active");
  }
}

// dot click
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    updateSlider();
    resetAutoPlay();
  });
});

// autoplay
function startAutoPlay() {
  interval = setInterval(() => {
    currentIndex++;

    if (currentIndex >= slides.length) {
      currentIndex = 0;
    }

    updateSlider();
  }, 3000);
}

function resetAutoPlay() {
  clearInterval(interval);
  startAutoPlay();
}

// pause on hover (important UX improvement)
document.querySelector(".custom-slider").addEventListener("mouseenter", () => {
  clearInterval(interval);
});

document.querySelector(".custom-slider").addEventListener("mouseleave", () => {
  startAutoPlay();
});

// init
updateSlider();
startAutoPlay();

 $(document).ready(function(){

 AOS.init();
});

$(document).ready(function(){

  $('.testimonial-slider').owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: true,
    autoplay: true,
     autoHeight: true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    }
});

});
$(window).on("load", function () {

    setTimeout(function () {

        $(".top-header").slideUp(500);

    }, 6000);

});


$(document).ready(function () {

    let counterStarted = false;

    function startCounter() {

        $(".counter").each(function () {

            let $this = $(this);

            let target = parseInt($this.data("target"));

            let symbol = $this.data("symbol") || "";

            $({ Counter: 0 }).animate({

                Counter: target

            }, {

                duration: 2000,

                easing: "swing",

                step: function () {

                    $this.text(Math.ceil(this.Counter) + symbol);

                },

                complete: function () {

                    $this.text(target + symbol);

                }

            });

        });

    }

    $(window).on("scroll load", function () {

        if (counterStarted) return;

        let sectionTop = $(".counter-section").offset().top;

        let sectionHeight = $(".counter-section").outerHeight();

        let scrollTop = $(window).scrollTop();

        let windowHeight = $(window).height();

        if (scrollTop + windowHeight > sectionTop + 100) {

            counterStarted = true;

            startCounter();

        }

    });

});