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
  if (carouselPosition >= carouselImages.length - 1) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  carouselPosition++;
  carouselSlide.style.transform = `translateX(-${
    carouselWidth * carouselPosition
  }px)`;
});

prevBtn.addEventListener("click", () => {
  if (carouselPosition <= 0) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  carouselPosition--;
  carouselSlide.style.transform = `translateX(-${
    carouselWidth * carouselPosition
  }px)`;
});

carouselSlide.addEventListener("transitionend", () => {
  if (carouselImages[carouselPosition].id === "carousel__img--last-dup") {
    carouselSlide.style.transition = "none";
    carouselPosition = carouselImages.length - 2;
    carouselSlide.style.transform = `translateX(-${
      carouselWidth * carouselPosition
    }px)`;
  }

  if (carouselImages[carouselPosition].id === "carousel__img--first-dup") {
    carouselSlide.style.transition = "none";
    carouselPosition = carouselImages.length - carouselPosition;
    carouselSlide.style.transform = `translateX(-${
      carouselWidth * carouselPosition
    }px)`;
  }
});
