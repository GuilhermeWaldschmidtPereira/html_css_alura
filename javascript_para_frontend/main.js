const lista_de_teclas = document.querySelectorAll('.tecla')

for (let i = 0; i < lista_de_teclas.length; i++) {
    lista_de_teclas[i].onclick = function () {
        var tecla = lista_de_teclas[i].classList[1]
        document.getElementById(`som_${tecla}`).play()
    }
}