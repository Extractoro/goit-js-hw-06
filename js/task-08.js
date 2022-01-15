/* Обработка отправки формы form.login-form должна быть по событию submit.
При отправке формы страница не должна перезагружаться.
Если в форме есть незаполненные поля, выводи alert с предупреждением о том, 
что все поля должны быть заполнены.
Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, 
где имя поля будет именем свойства, а значение поля - значением свойства. 
Для доступа к элементам формы используй свойство elements.                               
Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset. */

const form = document.querySelector('.login-form')

form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault()

    const formElems = event.currentTarget.elements
    const inputEmail = formElems.email.value
    const inputPassword = formElems.password.value

    const allData = {
        email: inputEmail,
        password: inputPassword
    }

    if (inputEmail === '' || inputPassword === '') {
        alert('Все поля должны быть заполнены')
    } else {
        form.reset()
        console.log(allData);
    }

    //     const formData = new FormData(event.currentTarget)
    //     formData.forEach((value, name) => {
    //         //    console.log('name ----->', name);
    //         //    console.log('value ----->', value);
    //     })
}