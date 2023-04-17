function buscarEnlaces() {
    //let enlace = document.getElementById('enlace')
    let enlace = document.querySelector('#enlace');//devuelve solo un elemento
    alert(enlace.innerHTML);

    let parrafos = document.querySelectorAll('a,p');//devuelve un aray
    for (let parr of parrafos) {
        alert(parr.innerHTML);
    }

    let enlaces = document.querySelectorAll('a');//devuelve un aray
    for (let enlace of enlaces) {
        enlace.nextElementSibling.innerHTML = 'Ji vare' //se seleccionan los elemtos que tienen un enlace por delante y se cambia el texto
        
        let siguienteParrafo = enlace.nextElementSibling;
        let primerHijoDelParrafo = siguienteParrafo.children[0];//pa no liarnos lo suyo es llamar a las variables en condiciones, para acceder a n elemento
                                                                //lejano lo suyo es usar un querySelector
    }
    
}
//buscarEnlaces();

//creacion de nodos
function crearParrafo(contenido) {//el contenido que s ele psa lo pnga al final del documento, pasado por el usuario
    let parrafoNuevo = document.createElement('p');
    parrafoNuevo.innerHTML = contenido;

    let elBody = document.querySelector('body');
    elBody.append(parrafoNuevo);
}
crearParrafo(prompt('¿Qué quieres escribir?'));


/////////////////////////////////////////////
let boton = document.getElementById('boton');//Busca elemnto 
boton.addEventListener('click', crearParrafoV1);//entre comilla nombre evento y la funcion(tiene que ser un metodo que no reciva parametros)

function crearParrafoV1() {
    let parrafoNuevo = document.createElement('p');
    let contenido = prompt('Escribe');
    parrafoNuevo.innerHTML = contenido;

    document.body.append(parrafoNuevo);
}


//////////////añadir fila a tabla
let boton1 = document.getElementById('boton1'); 
boton1.addEventListener('click', crearAlumno);
let indice = 1

function crearAlumno() {
    let ultimaFila = document.querySelector('tr:last-child');
    let nuevaFila = ultimaFila.cloneNode(true);
    nuevaFila.firstElementChild.innerHTML = prompt('Nombre alumno');
    nuevaFila.lastElementChild.innerHTML =  ++indice;

    document.querySelector('table').append(nuevaFila);
}