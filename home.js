const words = [
  "Web Developer",
  "UI/UX Designer",
  "Creative Thinker",
  "Frontend Engineer",
  "Coder & Innovator"
];

let i = 0;
let j = 0;
let isDeleting = false;

function type() {
  const current = words[i];
  const display = document.getElementById("typewriter");

  if (!isDeleting) {
    display.textContent = current.substring(0, ++j);
  } else {
    display.textContent = current.substring(0, --j);
  }

  // Switching states
  if (!isDeleting && j === current.length) {
    isDeleting = true;
    setTimeout(type, 1200);
    return;
  } 
  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
  }

  setTimeout(type, isDeleting ? 60 : 120);
}

type();
