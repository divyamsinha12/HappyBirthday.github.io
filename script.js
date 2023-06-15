console.log("happy biurthday");
const masterplay = document.querySelector('.masterplay');
let audioElement = new Audio('happybirthday.mp3');


masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
      audioElement.play();
      masterplay.classList.remove('fa-play-circle');
      masterplay.classList.add('fa-pause-circle');
      masterplay.textContent = "Enjoy";
    } else {
      audioElement.pause();
      masterplay.classList.remove('fa-pause-circle');
      masterplay.classList.add('fa-play-circle');
      masterplay.textContent = "Play me";
      masterplay.textContent.size = small;
    }
  });