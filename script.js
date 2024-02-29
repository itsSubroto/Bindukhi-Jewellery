const slides = document.querySelectorAll(".slide");
const dotContainer = document.querySelector(".sliderDots");
let currentSlide = 0;

// create slider dots
for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement("div");
  // console.log(dot);
  dot.classList.add("dot");
  if (i === 0) {
    dot.classList.add("active-dot");
  }
  dotContainer.appendChild(dot);
}

// functioning dots

const dots = document.querySelectorAll(".dot");

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    slides[currentSlide].style.opacity = 0;
    dots[currentSlide].classList.remove("active-dot");
    currentSlide = index;
    slides[currentSlide].style.opacity = 1;
    dots[currentSlide].classList.add("active-dot");
  });
});

// slideing imgs
function nextSlide() {
  slides[currentSlide].style.opacity = 0;
  dots[currentSlide].classList.remove("active-dot");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.opacity = 1;
  dots[currentSlide].classList.add("active-dot");
}



//calling nextSlide function

nextSlide();
setInterval(nextSlide, 5000);





// navbar opasity change when scroll


let nav = document.querySelector(".nav");
window.addEventListener("scroll", function () {
  if (this.scrollY > 0) {
    nav.classList.add("transparent");
  }
  else {
    nav.classList.remove("transparent");
    
  }
});
