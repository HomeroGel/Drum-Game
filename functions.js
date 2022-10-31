function playSound(e) { //Funcion que genera el sonido
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`) //en audio guardo el sonido, variando la tecla que se presiona.
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`) // en key guardo el div completo de la tecla que se presiona.
    
    if (!audio) return; //Si se presiona una tecla que no tiene un sonido asignado, detengo la funcion.
    audio.currentTime = 0; //lleva el sonido al inicio
    audio.play()
    key.classList.add('playing') // agrego la clase playing, que activa la tecla y le da estilos.
}

function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove('playing') // luego de .8s borro la clase y la animacion de apretar, se borra.
}

const keys = document.querySelectorAll('.key'); //me traigo todos los div con clase .key y los guardo en la variable keys
keys.forEach(key => key.addEventListener('transitionend', removeTransition)) //itero keys y le agrego un escuchador de evento, para cuando termina la transicion, ejecutar una funcion de eliminar la transicion.
window.addEventListener('keydown', playSound);