let celdas = document.querySelectorAll('.container__bloque__titulo')
let celdasText = document.querySelectorAll('.container__bloque__txt')

celdas.forEach( (celda, index) => {
    celda.addEventListener('click', () => {
        console.log(celdasText[index])
        celdasText[index].classList.toggle('hiden')

        celdasText.forEach( (text, i) => {
            
        })
    })
})