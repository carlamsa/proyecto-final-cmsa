let popup = document.querySelector('#popup')
let imagen = document.querySelector('.hover__img')
let popupImg = document.querySelector('.zoom')

imagen.addEventListener('click', () => {
    let imageUrl = imagen.src
    popupImg.src = imageUrl
    popup.classList.toggle('hidden')
})

// Cerrar el popup
popup.addEventListener('click', e => popup.classList.toggle('hidden'))
