const button = document.querySelector("button")
const body = document.querySelector("body")
const color = ['red', 'green', 'orange', 'yellow', 'pink', 'blue', 'brown']

body.style.backgroundColor = 'pink'

button.addEventListener('click', changeB)

butto.addEventListen('click', changeB)

function changeB() {
    const colorIndex = parseInt(Math.random()*color.length)
    body.style.backgroundColor = color[colorIndex]
}

