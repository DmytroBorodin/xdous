const slideWrapper = document.querySelector(".img__slider__wrapper");
const sliderBlock = document.querySelector(".img__slider__block");
const slides = [...document.querySelectorAll("img")];
const sliderWidth = slides[0].clientWidth;
let scrollAmount = 0;
const scrollMin = 0;
const scrollMax = sliderWidth * slides.length + 5 * (slides.length - 1) + "px";

slideWrapper.style.width = scrollMax;

const viewportWidth = document.body.clientWidth;
const viewportHeight = document.body.clientHeight;
if (viewportWidth < 768) {
  slideWrapper.style.width = parseInt(scrollMax) / 2 + "px";
  if (slides.length % 2 !== 0) {
    console.log(parseInt(scrollMax) / 2 + sliderWidth / 2);
    slideWrapper.style.width = parseInt(scrollMax) / 2 + sliderWidth / 2 + "px";
  }
}

if (viewportHeight < 425) {
  slideWrapper.style.width = scrollMax;
}

window.addEventListener("resize", (e) => {
  const docWidth = document.body.clientWidth;
  console.log(docWidth);
  if (docWidth < 768) {
    slideWrapper.style.width = parseInt(scrollMax) / 2 + "px";
    if (slides.length % 2 !== 0) {
      slideWrapper.style.width = parseInt(scrollMax) / 2 + sliderWidth + "px";
    }
  } else {
    slideWrapper.style.width = scrollMax;
  }

  if (viewportHeight < 425) {
    slideWrapper.style.width = scrollMax;
  }
});

const scrollButton = document.querySelector(".btn__container button");

scrollButton.addEventListener("click", () => {
  const scrollLeft = Math.min((scrollAmount += sliderWidth + 5), parseInt(scrollMax));
  sliderBlock.scrollTo({
    top: 0,
    left: scrollLeft,
    behavior: "smooth",
  });
});

let isDown = false;
let startX, scrollLeft;

sliderBlock.addEventListener("mousedown", (e) => {
  isDown = true;
  startX = e.pageX - sliderBlock.offsetLeft;
  scrollLeft = sliderBlock.scrollLeft;
});
sliderBlock.addEventListener("mouseLeave", () => {
  isDown = false;
});
sliderBlock.addEventListener("mouseup", () => {
  isDown = false;
});
sliderBlock.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - sliderBlock.offsetLeft;
  const walk = x - startX;
  sliderBlock.scrollLeft = scrollLeft - walk;
  scrollAmount = scrollLeft - walk;
});
