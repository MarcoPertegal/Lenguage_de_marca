//Ejercicio1
function cambiarOrden(unArray) {
    let numAleatorio1 = Math.floor(Math.random() * unArray.length);
    let numAleatorio2 = Math.floor(Math.random() * unArray.length);

    let elemento1 = unArray[numAleatorio1];
    let elemento2 = unArray[numAleatorio2];

    unArray[numAleatorio1] = elemento2;
    unArray[numAleatorio2] = elemento1;

	return unArray;
}

//Ejercicio2
function trocearURL(url) {
    let trocearPorBarra = url.split('/');
    let unionConPunto = trocearPorBarra.join('.');
    let trocearPorPunto = unionConPunto.split('.');
    let unionConDosPuntos = trocearPorPunto.join(':');
    let trocearPorDosPuntos = unionConDosPuntos.split(':');

    return trocearPorDosPuntos;
}

//Ejercicio3
function principal(url) {
    let urlTroceada = trocearURL(url);
    
    let urlTroceada1 = cambiarOrden(urlTroceada);
    let urlTroceada2 = cambiarOrden(urlTroceada1);
    let urlTroceada3 = cambiarOrden(urlTroceada2);

    return alert(urlTroceada3);
}

principal(prompt('Escriba una URL'));