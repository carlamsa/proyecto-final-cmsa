const fila = document.querySelector('.contenido__jornadas')
const peliculas = document.querySelectorAll('.contenido__jornadas__img')

const flechaIzquierda = document.getElementById('flecha-izquierda')
const flechaDerecha = document.getElementById('flecha-derecha')

// Event listener para la fecha derecha
flechaDerecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth
})

// Event listener para la fecha izquierda
flechaIzquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth
})

// Hover encima de los videos
peliculas.forEach((pelicula) => {
    pelicula.addEventListener('mouseenter', (e) => {
        const elemento = e.currentTarget
        setTimeout(() => {
            peliculas.forEach(pelicula => pelicula.classList.remove('hover'))
            elemento.classList.add('hover')
        }, 200)
    })
})

fila.addEventListener('mouseleave', () => {
    peliculas.forEach(pelicula => pelicula.classList.remove('hover'))
})