const lista_de_teclas = document.querySelectorAll('.tecla')
const lista_de_sons = document.querySelectorAll('audio')

for (let i = 0; i < lista_de_teclas.length; i++) {
    lista_de_teclas[i].onclick = function teste() {
        lista_de_sons[i].play()
    }
}