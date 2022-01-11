const ulEl = document.querySelector('#categories');
const liEl = document.querySelectorAll('.item');
const liNameEl = document.querySelectorAll('.item > h2');
const liQuantityEl = document.querySelectorAll('.item > ul');

// console.log('ulEl:', ulEl);
// console.log('liEl:', liEl);
// console.log('liNameEl:', liNameEl);
// console.log('liQuantityEl:', liQuantityEl);

console.log('Number of categories:', liEl.length);

console.log('----------------------------------------');

liEl.forEach(elem => {
    console.log(`Category: ${elem.textContent} Elements: ${elem.lastElementChild.children.length}`)
})