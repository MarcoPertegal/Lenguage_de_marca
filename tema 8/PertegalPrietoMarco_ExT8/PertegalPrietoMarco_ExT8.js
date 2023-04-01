
//Ejercicio1
let array = new Array();

function pedirNombres() {
    
    for (let i = 0; i < array.length; i++) {
        let nombre = prompt('Diga un nombre');
        if (!isFinite(nombre)) {
            nombre = array[i];
        }
    }
    for (let i = 0; i < array.length; i++) {
        alert(array[i]);
        
    }
}
pedirNombres();

//Ejercicio 2

function camelize(palabra) {
    let letras = palabra.split("");

    for (let i = 0; i < letras.length; i++) {
        if (letras === "-") {
            letras[i+1].toUpperCase();
        }
    }
    let quitarBarras = letras.split("-");
    let juntar = quitarBarras.join(" ");
}
alert(juntar);
camelize(prompt('Escriba una palabra'));

//Ejercicio 3

function sortear(arr) {
    letra = Math.random() * (5 - 0) + 0;
    aux = arr[letra];
}
alert(aux);
let arr = ['T', 'R', 'W', 'A', 'G', 'M']; 

//Ejercicio 4
function principal() {
    pedirNombres();
}