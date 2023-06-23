const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const range = document.getElementById("range");
let name1 = document.getElementById("name1")
let name2 = document.getElementById("name2")
const body = document.querySelector("body");

function gradient() {
    name1.textContent = color1.value
    name2.textContent = color2.value
    body.style.background = `linear-gradient(${range.value}deg, ${color1.value}, white , ${color2.value})`;
}

color1.addEventListener("input", gradient);
color2.addEventListener("input", gradient);
range.addEventListener("input", gradient);