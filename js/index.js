// BURGER MENU
    const header = document.querySelector('.header')
    const menu = document.querySelector('.header__menu')
    const hamburgerMenu = document.querySelector('.header__burger')
    const lastScrollY = window.scrollY
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > lastScrollY) {
            // Scroll down
            header.style.top = '0px' // Ajusta el valor según sea necesario
            hamburgerMenu.style.display = 'block' // Muestra el ícono de hamburguesa
            menu.style.display = 'none' // Oculta el menú de navegación
        } else {
            // Scroll up
            header.style.top = '0'
            if (window.innerWidth <= 768) {
                hamburgerMenu.style.display = 'block' // Muestra el ícono de hamburguesa para pantallas pequeñas
            } else {
                hamburgerMenu.style.display = 'none' // Oculta el ícono de hamburguesa para pantallas grandes
                menu.style.display = 'flex' // Muestra el menú de navegación para pantallas grandes
            }
        }
        lastScrollY = window.scrollY
    })
    /* Cuando hago click en header__burger , header__menu TOGGLE (aparece o desaparece) de 'activo'*/
    hamburgerMenu.addEventListener('click', () => {
        menu.classList.toggle('activo')
    })