// BURGER MENU 
const nav = document.querySelector('#nav')
const abrir = document.querySelector('#abrir')
const cerrar = document.querySelector('#cerrar')
const header = document.querySelector('header')


    // abrir y cerrar el menú burger
abrir.addEventListener('click', () => {
    nav.classList.add('visible')
})

cerrar.addEventListener('click', () => {
    nav.classList.remove('visible')
})
