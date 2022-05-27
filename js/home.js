const audio = document.querySelector(".rain__mp3");
audio.autoplay = true;
document.addEventListener("click", () => {
  audio.setAttribute("mute", false);
  audio.play();
});
