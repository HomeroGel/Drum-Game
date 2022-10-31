function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    console.log(audio)
    if (!audio) return; //Detengo la funcion
    audio.currentTime = 0; //lleva el sonido al inicio
    audio.play()
    key.classList.add('playing')
}

function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key'); //me traigo todos los div con clase .key y los guardo en la variable keys
keys.forEach(key => key.addEventListener('transitionend', removeTransition)) //itero keys y le agrego un escuchador de evento, para cuando termina la transicion, ejecutar una funcion de eliminar la transicion.
window.addEventListener('keydown', playSound);