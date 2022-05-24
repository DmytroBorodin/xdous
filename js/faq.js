const faqWrapper = document.querySelector(".faq__wrapper");
const faqBlocks = [...document.querySelectorAll(".faq__block")];

const showAnswer = (e) => {
  faqBlocks.forEach((block) => {
    block.classList.remove("active");
  });
  e.target.closest(".faq__block").classList.add("active");
};

faqWrapper.addEventListener("click", showAnswer);
