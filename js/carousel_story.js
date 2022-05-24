const controlsBlock = document.querySelector(".carusel__desktop__controls");
const controlBtns = [...document.querySelectorAll(".carousel__control__btn")];
const sliderWrapper = document.querySelector(".slider__wrapper");
const slides = [...document.querySelectorAll(".slide__block")];

let id = "d_story";

const updateActiveControlBtn = () => {
  controlBtns.forEach((btn) => {
    const btnId = btn.getAttribute("data-id");
    btn.classList.remove("active");
    if (btnId === id) {
      btn.classList.add("active");
    }
  });
};

controlsBlock.addEventListener("click", (e) => {
  id = e.target.getAttribute("data-id");
  if (id) {
    updateActiveControlBtn();
    slides.find((item) => item.getAttribute("id") === id).scrollIntoView();
  }
});

sliderWrapper.addEventListener("scroll", (e) => {
  const top = e.target.getBoundingClientRect().top;
  slides.forEach((slide) => {
    const slideTop = slide.getBoundingClientRect().top;
    if (slideTop >= top && slideTop <= top + 100) {
      id = slide.getAttribute("id");
    }
  });
  updateActiveControlBtn();
});

// mobile control logic

const mobileControlNext = document.querySelector("button.next");
const mobileControlPrev = document.querySelector("button.prev");

const slideCount = slides.length;
let slideCounter = 0;

const NEXT_ACTION = "NEXT";
const PREV_ACTION = "PREV";

const showActiveSlide = (action) => {
  switch (action) {
    case NEXT_ACTION:
      if (slideCounter < slides.length) slides[slideCounter - 1].classList.add("scroll__right");
      return;
    case PREV_ACTION:
      if (slideCounter >= 0) slides[slideCounter].classList.remove("scroll__right");
      return;
    default:
      return;
  }
};

mobileControlNext.addEventListener("click", () => {
  slideCounter++;
  slideCounter >= slides.length - 1
    ? (slideCounter = slides.length - 1)
    : (slideCounter = slideCounter);
  if (mobileControlPrev.classList.contains("disabled"))
    mobileControlPrev.classList.remove("disabled");
  if (slideCounter === slides.length - 1) mobileControlNext.classList.add("disabled");
  showActiveSlide(NEXT_ACTION);
});

mobileControlPrev.addEventListener("click", () => {
  slideCounter--;
  slideCounter <= 0 ? (slideCounter = 0) : (slideCounter = slideCounter);
  if (slideCounter === 0) mobileControlPrev.classList.add("disabled");
  if (slideCounter < slides.length - 1) mobileControlNext.classList.remove("disabled");

  showActiveSlide(PREV_ACTION);
});
