const board = document.querySelector("#board")
const SQUARE_NUMBERS = 500;

for (let i = 0; i < SQUARE_NUMBERS; i += 1){
    const square = document.createElement("div")
    square.classList.add("square")
    square.addEventListener("mouseover",setColor)
       square.addEventListener("mouseleave",removeColor)
    board.append(square)
    
}

function setColor(event) {
    const element = event.target
    const color = `rgb(${randomRgb(0, 255)},${randomRgb(0, 255)},${randomRgb(0, 255)})`
    element.style.backgroundColor = color
    element.style.boxShadow=`0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(event) {
    const element = event.target
    element.style.backgroundColor = "#1d1d1d"
    element.style.boxShadow=`0 0 2px #000`
}

function randomRgb(min,max) {
  return Math.round(Math.random() * (max - min) + min);
}