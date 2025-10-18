// Typewriter Effect
const typewriterElement = document.getElementById("typewriter");
const texts = ["I'm Samson Tolulope Moradeyo", "Psalmotee Tech"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typewriter() {
  const currentText = texts[textIndex];

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  typewriterElement.textContent = currentText.substring(0, charIndex);

  let speed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentText.length) {
    speed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
    speed = 500;
  }

  setTimeout(typewriter, speed);
}

// Current Time Display
function updateTime() {
  const timeElement = document.getElementById("current-time");
  timeElement.textContent = Date.now();
}

// Initialize
typewriter();
updateTime();
setInterval(updateTime, 100);
