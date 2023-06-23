const rang1 = document.getElementById("color1");
const rang2 = document.getElementById("color2");
const range = document.getElementById("range");
const body = document.querySelector("body");
const span = document.querySelector("span");
const btn = document.querySelector("button");

function getGradient() {
  body.style.background = `linear-gradient(${range.value}deg, ${rang1.value}, white , ${rang2.value})`;
}

rang1.addEventListener("input", getGradient);
rang2.addEventListener("input", getGradient);
range.addEventListener("input", getGradient);