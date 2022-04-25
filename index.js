const carouselSlide = document.querySelector(".carousel__slide");
const carouselImages = document.querySelectorAll(".carousel__img");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let carouselPosition = 1;
const carouselWidth = carouselImages[0].clientWidth;
console.log(carouselWidth);

carouselSlide.style.transform = `translateX(-${
  carouselWidth * carouselPosition
}px)`;

nextBtn.addEventListener("click", () => {
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  carouselPosition++;
  carouselSlide.style.transform = `translateX(-${
    carouselWidth * carouselPosition
  }px)`;
});

prevBtn.addEventListener("click", () => {
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  carouselPosition--;
  carouselSlide.style.transform = `translateX(-${
    carouselWidth * carouselPosition
  }px)`;
});
