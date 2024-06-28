let bannerZoom = document.querySelector('#banner-nosotros')
let appearElement = document.querySelectorAll('.appear')

// Zoom en el banner
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        bannerZoom.classList.add('banner-no-margin')
        setTimeout(() => {
            bannerZoom.classList.remove('banner-margin')
        }, 100)
    } else {
        bannerZoom.classList.remove('banner-no-margin')
        setTimeout(() => {
            bannerZoom.classList.add('banner-margin')
        }, 100)
        console.log('funciona')
    }
});

// Que el texto aparezca y desaparezca sutilmente
window.addEventListener('scroll', () => {
    appearElement.forEach((appear) => {
        if (appear.getBoundingClientRect().top < 0) {
            appear.style.opacity = '0'
        } else {
            appear.removeAttribute('style')
        }
    })
})


// Valores de la empresa
const contents = document.querySelectorAll('.content');

contents.forEach(content => {
    const descripcion = content.querySelector('.valores__descripcion');
    const titulo = content.querySelector('.valores__titulo');

    content.addEventListener('mouseover', () => {
        titulo.style.opacity = '1'
        titulo.style.visibility = 'visible'
        descripcion.style.display = 'block'
        descripcion.style.opacity = '1'
        descripcion.style.visibility = 'visible'
    })

    
    content.addEventListener('mouseout', () => {
        titulo.style.opacity = '1'
        titulo.style.visibility = 'visible'
        descripcion.style.display = 'none'
        descripcion.style.opacity = '0'
        descripcion.style.visibility = 'hidden'
    })
})
