const keys = Array.from(document.querySelectorAll(".key"));
console.log(keys[0])

window.addEventListener('keydown', playSound);

keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;//timing is depend on css style transform
    e.target.classList.remove('playing');
  }

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;// if no audio the return

  audio.currentTime = 0;// start with 0
  audio.play();
  key.classList.add("playing");

  setTimeout(() => {
    key.classList.remove('playing');
  }, 300);
}


