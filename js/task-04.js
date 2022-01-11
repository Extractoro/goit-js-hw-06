// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

let valueEl = Number(document.querySelector('#value').textContent)
let counterValue = document.querySelector('#value')
const decrementBtn = document.querySelector('[data-action="decrement"]')
const incrementBtn = document.querySelector('[data-action="increment"]')

decrementBtn.addEventListener('click', () => {
    valueEl -= 1
    counterValue.innerHTML = valueEl
        // console.log(valueEl);
})

incrementBtn.addEventListener('click', () => {
    valueEl += 1
    counterValue.innerHTML = valueEl
        // console.log(valueEl);
})