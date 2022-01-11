function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const widget = document.querySelector('.widget')
const color = document.querySelector('.color')
const btn = document.querySelector('.change-color')

widget.style.backgroundColor = getRandomHexColor

btn.addEventListener('click', onBgColor)

function onBgColor(event) {
    // console.log(getRandomHexColor());
    widget.style.backgroundColor = getRandomHexColor()
    color.textContent = getRandomHexColor()
}