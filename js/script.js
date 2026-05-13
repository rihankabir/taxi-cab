 const track = document.querySelector(".slider-track");
    const dots = document.querySelectorAll(".dot");
    const slides = document.querySelectorAll(".slide");

    let currentIndex = 0;

    function updateSlider(){

      track.style.transform =
      `translateX(-${currentIndex * 100}%)`;

      dots.forEach(dot =>
        dot.classList.remove("active")
      );

      dots[currentIndex].classList.add("active");
    }

    dots.forEach((dot,index)=>{

      dot.addEventListener("click",()=>{

        currentIndex = index;
        updateSlider();

      });

    });

    // Auto Slide

    setInterval(()=>{

      currentIndex++;

      if(currentIndex >= slides.length){
        currentIndex = 0;
      }

      updateSlider();

    },3000);