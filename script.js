// const h1 = document.querySelector("h1")
// const btn = document.querySelector("button")
const h2 = document.querySelector("h2")
let input = document.querySelector("input")
const body = document.querySelector("body")

// let isToggle = true
// btn.addEventListener("click", function(){
//     if(isToggle){
//         h1.textContent = "Hammaga Salom :)"
//         body.style.backgroundColor = "bisque"
//     }else{
//         h1.textContent = "Hammaga Hayr :("
//         body.style.backgroundColor = "blue"
//     }
//     isToggle = !isToggle
// })

input.addEventListener("input", ()=>{
    body.style.backgroundColor = input.value
    h2.textContent = input.value
})