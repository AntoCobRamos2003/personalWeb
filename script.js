// background sound
const unmute = document.querySelector(".unmute");
const mute = document.querySelector(".mute");
let track = new Audio("trav.mp3");
track.volume = 0.1;
track.loop = true;
track.currentTime = 20.0;
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
//animation
AOS.init();
//add animation to service cards
const cards = document.querySelectorAll('.proCard');

window.addEventListener('load',()=>{
    for(let i=0;i<=cards.length;i++){
        cards[i].setAttribute('data-aos-delay','300')
    }
})
//add another animation when on mobile screen
const ww = document.body.clientWidth;
    if (ww < 600) {
      for(let i=0;i<=cards.length;i++){
        cards[i].setAttribute('data-aos','fade-up')
    }
  } 
