// PARALAX BANNER HOME
let title = document.querySelector('.banner__title');
let banner = document.querySelector('.banner');
let image = document.querySelector('.banner');

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;
    let imgSpeed = 1; // Velocidad de desplazamiento, ajusta según sea necesario

    // Desplazamiento de la imagen de fondo
    banner.style.backgroundPositionY = -scroll * imgSpeed + 'px';

    // Desplazamiento del título
    let titleSpeed = 0.4; // Velocidad de desplazamiento del título, ajusta según sea necesario
    let titleFinalPosition = banner.offsetHeight - title.offsetHeight - -80 * 16; // 3em desde el final

    if (scroll <= titleFinalPosition) {
        title.style.transform = 'translateY(' + scroll * titleSpeed + 'px)';
    }
});
