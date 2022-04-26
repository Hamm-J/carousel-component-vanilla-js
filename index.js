const carouselSlide = document.querySelector(".carousel__slide");
const carouselImages = document.querySelectorAll(".carousel__img");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let carouselPosition = 1;
let carouselWidth = carouselImages[0].clientWidth;

window.addEventListener("resize", () => {
  // Update carouselWidth on viewport resize
  carouselWidth = carouselImages[0].clientWidth;
  // Rotate the carousel into position according to the new carouselWidth on
  // viewport resize
  carouselSlide.style.transform = `translateX(-${
    carouselWidth * carouselPosition
  }px)`;
});

// Safari was returning a different clientWidth on page refresh so I added an
// event handler to the window on load to redefine the carouselWidth
window.addEventListener("load", () => {
  // Update carouselWidth on viewport load
  carouselWidth = carouselImages[0].clientWidth;
  // Rotate the carousel into position according to the new carouselWidth on
  // viewport resize
  carouselSlide.style.transform = `translateX(-${
    carouselWidth * carouselPosition
  }px)`;
});

nextBtn.addEventListener("click", () => {
  // Prevent the user to click faster than the transition animation and go
  // past the last image
  if (carouselPosition >= carouselImages.length - 1) return;

  // Add transform animation to the slide (added in JS because it will be removed
  // below)
  carouselSlide.style.transition = "transform 300ms ease-in-out";
  carouselPosition++;
  // Rotate the carousel to the left
  carouselSlide.style.transform = `translateX(-${
    carouselWidth * carouselPosition
  }px)`;
});

prevBtn.addEventListener("click", () => {
  // Prevent the user to click faster than the transition animation and go
  // past the last image
  if (carouselPosition <= 0) return;

  // Add transform animation to the slide (added in JS because it will be removed
  // below)
  carouselSlide.style.transition = "transform 300ms ease-in-out";
  carouselPosition--;
  // Rotate the carousel to the right
  carouselSlide.style.transform = `translateX(-${
    carouselWidth * carouselPosition
  }px)`;
});

carouselSlide.addEventListener("transitionend", () => {
  // If the user is on the duplicate last image...
  if (carouselImages[carouselPosition].id === "carousel__img--last-dup") {
    // Remove the transition animation so the user doesn't see the carousel
    // going back to the first position
    carouselSlide.style.transition = "none";
    // Move back to the start of the carousel
    carouselPosition = carouselImages.length - 2;
    // Add the transition animation back
    carouselSlide.style.transform = `translateX(-${
      carouselWidth * carouselPosition
    }px)`;
  }

  // If the user is on the duplicate first image...
  if (carouselImages[carouselPosition].id === "carousel__img--first-dup") {
    // Remove the transition animation so the user doesn't see the carousel
    // going back to the last position
    carouselSlide.style.transition = "none";
    // Move to the end of the carousel
    carouselPosition = carouselImages.length - carouselPosition;
    // Add the transition animation back
    carouselSlide.style.transform = `translateX(-${
      carouselWidth * carouselPosition
    }px)`;
  }
});
