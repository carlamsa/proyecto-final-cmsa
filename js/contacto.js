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

window.addEventListener('scroll', () => {
    appearElement.forEach( (appear) => {
        if (appear.getBoundingClientRect().top < 0 ){
            appear.style.opacity = '0'
        } else {
            appear.removeAttribute('style')
        }
    })
})