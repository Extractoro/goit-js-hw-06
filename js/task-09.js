function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const widget = document.querySelector('.widget')
const color = document.querySelector('.color')
const btn = document.querySelector('.change-color')

btn.addEventListener('click', onBgColor)

function onBgColor() {
    const randColor = getRandomHexColor()
    widget.style.backgroundColor = randColor
    color.textContent = randColor
}