/* Создай функцию createBoxes(amount), которая принимает один параметр - число. 
Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

Размеры самого первого <div> - 30px на 30px.
Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
Все элементы должены иметь случайный цвет фона в формате HEX. 
Используй готовую функцию getRandomHexColor для получения цвета. */

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputCreate = document.querySelector('[data-create=""]')
const inputDestroy = document.querySelector('[data-destroy=""]')
const boxes = document.querySelector('#boxes')

inputCreate.addEventListener('click', getAmount)
inputDestroy.addEventListener('click', onDestroyBoxes)

function getAmount() {
    let amount = document.querySelector('#controls input').value
    createBoxes(amount)
}

function createBoxes(amount) {
    let basicSize = 30;
    let fragment = document.createDocumentFragment();
    for (let i = 0; i < amount; i++) {
        let size = basicSize + i * 10;
        let div = document.createElement('div');
        div.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}`
        fragment.appendChild(div)
    }
    boxes.appendChild(fragment)
}

function onDestroyBoxes() {
    boxes.innerHTML = '';
}