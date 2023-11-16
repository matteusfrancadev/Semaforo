const red = document.querySelector('.red')
const yellow = document.querySelector('.yellow')
const green = document.querySelector('.green')
const auto = document.querySelector('.auto')
const img = document.querySelector('img')

const convertImageRed = () => {
    img.src = 'vermelho.png'
}
const convertImageYellow = () => {
    img.src = 'amarelo.png'
}
const convertImageGreen = () => {
    img.src = 'verde.png'
}

const imgAuto = () => {
    for (i = 0; i <= 3; i++) {
        i = img
        img.src = 'vermelho.png'
        img.src = 'amarelo.png'
        img.src = 'verde.png'
    }
}


red.addEventListener('click', convertImageRed)
yellow.addEventListener('click', convertImageYellow)
green.addEventListener('click', convertImageGreen)
auto.addEventListener('click', imgAuto)
