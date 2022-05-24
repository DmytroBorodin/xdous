const crewInfoBlock = document.querySelector(".crew__info__block");
const slides = document.querySelectorAll(".info__block");

const setActiveSlide = (e) => {
  crewInfoBlock.classList.add("active");
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  e.target.closest(".info__block") ? e.target.closest(".info__block").classList.add("active") : "";
};

crewInfoBlock.addEventListener("mouseover", setActiveSlide);
crewInfoBlock.addEventListener("mouseout", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  crewInfoBlock.classList.remove("active");
});
