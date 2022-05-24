// background sound
const unmute = document.querySelector(".unmute");
const mute = document.querySelector(".mute");
let track = new Audio("piano.mp3");
track.volume = 0.1;
track.loop = true;
track.currentTime = 4.0;
unmute.addEventListener("click", () => {
  if (mute.classList.contains("mute")) {
    mute.classList.add("active");
    unmute.classList.remove("active");
    track.pause();
  }
});
mute.addEventListener("click", () => {
  if (unmute.classList.contains("unmute")) {
    unmute.classList.add("active");
    mute.classList.remove("active");
    track.play();
  }
});
