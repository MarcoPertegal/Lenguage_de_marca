function buscarEnlaces() {
    //let enlace = document.getElementById('enlace')
    let enlace = document.querySelector('#enlace');//devuelve solo un elemento
    alert(enlace.innerHTML);

    let parrafos = document.querySelectorAll('a,p');//devuelve un aray
    for (let parr of parrafos) {
        alert(parr.innerHTML);
    }
}
buscarEnlaces();