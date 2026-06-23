/*====================================
    CUSTOM SLIDER
====================================*/

const slider = document.querySelector(".custom-slider");
const track = document.querySelector(".slider-track");
const dots = document.querySelectorAll(".dot");
const slides = document.querySelectorAll(".slide");

let currentIndex = 0;
let interval;

if (slider && track && slides.length > 0) {

    function updateSlider() {

        track.style.transform = `translateX(-${currentIndex * 100}%)`;

        dots.forEach(dot => dot.classList.remove("active"));

        if (dots[currentIndex]) {
            dots[currentIndex].classList.add("active");
        }
    }

    dots.forEach((dot, index) => {

        dot.addEventListener("click", () => {

            currentIndex = index;

            updateSlider();

            resetAutoPlay();

        });

    });

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

    slider.addEventListener("mouseenter", () => {

        clearInterval(interval);

    });

    slider.addEventListener("mouseleave", () => {

        startAutoPlay();

    });

    updateSlider();

    startAutoPlay();

}

/*====================================
    AOS
====================================*/

$(document).ready(function () {

    if (typeof AOS !== "undefined") {

        AOS.init();

    }

});

/*====================================
    TESTIMONIAL SLIDER
====================================*/

$(document).ready(function () {

    if ($(".testimonial-slider").length) {

        $(".testimonial-slider").owlCarousel({

            loop: true,

            margin: 30,

            nav: false,

            dots: true,

            autoplay: true,

            autoHeight: true,

            responsive: {

                0: {

                    items: 1

                },

                768: {

                    items: 2

                },

                992: {

                    items: 3

                }

            }

        });

    }

});

/*====================================
    TOP HEADER
====================================*/

$(window).on("load", function () {

    if ($(".top-header").length) {

        setTimeout(function () {

            $(".top-header").slideUp(500);

        }, 6000);

    }

});

/*====================================
    COUNTER
====================================*/

$(document).ready(function () {

    if (!$(".counter").length) return;

    let counterStarted = false;

    function startCounter() {

        $(".counter").each(function () {

            let $this = $(this);

            let target = parseInt($this.data("target"));

            let symbol = $this.data("symbol") || "";

            $({

                Counter: 0

            }).animate({

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

    function checkCounter() {

        if (counterStarted) return;

        let counterTop = $(".counter").first().offset().top;

        let scrollTop = $(window).scrollTop();

        let windowHeight = $(window).height();

        if (scrollTop + windowHeight >= counterTop) {

            counterStarted = true;

            startCounter();

        }

    }

    $(window).on("scroll", checkCounter);

    checkCounter();

});


$(document).ready(function(){

    $(".partner-logo").hover(

        function(){

            $(this).css("opacity","1");

        },

        function(){

            $(this).css("opacity",".8");

        }

    );

});


$('.testimonial_slider').owlCarousel({

    loop:true,
    margin:30,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:4000,
    smartSpeed:800,

    responsive:{

        0:{
            items:1
        },

        768:{
            items:2
        },

        1200:{
            items:2
        }

    }

});

$('.testimonial_next').click(function(){

    $('.testimonial_slider').trigger('next.owl.carousel');

});

$('.testimonial_prev').click(function(){

    $('.testimonial_slider').trigger('prev.owl.carousel');

});

$(window).on("load", function(){

    $("#loader").fadeOut();

});