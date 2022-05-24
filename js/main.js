// menu interaction

const burgerBtn = document.querySelector(".burger__menu__btn");
const closeMenuBtn = document.querySelector(".close__btn.menu");
const mainMenuContainer = document.querySelector(".main__container.main__menu");

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.add("active");
  mainMenuContainer.classList.add("active");
});

closeMenuBtn.addEventListener("click", () => {
  burgerBtn.classList.remove("active");
  mainMenuContainer.classList.remove("active");
});

// set active menu link

const menuLinksArr = [...document.querySelectorAll(".menu__link")];
const pageId = document.querySelector("body").getAttribute("id");

const currentLink = menuLinksArr.find((link) => link.getAttribute("data-id") === pageId);
currentLink.classList.add("active");
