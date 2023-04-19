let botonCambiar = document.getElementById('btnCambiar');
botonCambiar.addEventListener('click', cambiarTamanoImg);

let botonOcultar = document.getElementById('btnOcultar');
botonOcultar.addEventListener('click', ocultarImg);
botonOcultar.addEventListener('click', cambiarBoton)

let botonMostrar = document.getElementById('btnMostrar');
botonMostrar.addEventListener('click', mostrarImg);

function cambiarTamanoImg() {
    let tamano = prompt('Indica el tamaño (pixeles) deseado para la imagen')
    let img = document.querySelector('img');
    img.width = tamano;
}

function ocultarImg() {
    let img = document.querySelector('img');
    img.hidden = true;
}

function mostrarImg() {
    let img = document.querySelector('img');
    img.hidden = false;
}

function cambiarBoton() {
    botonOcultar.classList.toggle('btn-primary');
    botonOcultar.classList.toggle('btn-danger');
}