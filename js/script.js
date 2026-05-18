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


});