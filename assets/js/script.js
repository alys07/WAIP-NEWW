// function toggleMode() {
// 	document.body.classList.toggle("dark-mode");

// 	const btn = document.getElementById("modeBtn");

// 	// check if dark mode is active
// 	if (document.body.classList.contains("dark-mode")) {
// 		btn.textContent = "Light Mode";
// 		btn.className = "btn btn-light mt-3";
// 	} else {
// 		btn.textContent = "Dark Mode";
// 		btn.className = "btn btn-dark mt-3";
// 	}
// }

// typing effect
const typingText = document.getElementById("typing-text");
const textToType = "Hello, I'm Alyssa — an IT student at UTP!";
let index = 0;

function typeEffect() {
  if (index < textToType.length) {
    typingText.textContent += textToType.charAt(index);
    index++;
    setTimeout(typeEffect, 60); // typing speed (in ms)
  }
}

// Run the typing effect after the page loads
window.onload = typeEffect;


// display current year in footer
document.getElementById("year").textContent = new Date().getFullYear();