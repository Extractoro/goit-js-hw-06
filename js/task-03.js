const images = [{
        url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];

const galleryEl = document.querySelector('.gallery')

// galleryEl.insertAdjacentHTML('afterbegin', `<li><img src='${images[0].url}' alt='${images[0].alt}'></li>`)
// galleryEl.insertAdjacentHTML('beforeend', `<li><img src='${images[1].url}' alt='${images[1].alt}'></li>`)
// galleryEl.insertAdjacentHTML('beforeend', `<li><img src='${images[2].url}' alt='${images[2].alt}'></li>`)

images.forEach(elem => {
    galleryEl.insertAdjacentHTML(
        'afterbegin',
        `<li style='margin-right: 30px; list-style: none'><img src='${elem.url}' alt='${elem.alt}' width='350' height='250'></li>`)
})