const text = "Hi, I’m Ashvik, a passionate and curious learner exploring the world of web development, design, and technology.";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing-text").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 50); // typing speed (ms)
  }
}

window.onload = typeEffect;
