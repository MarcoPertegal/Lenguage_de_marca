function mirarMayus(str){
    if(str === str.toUpperCase()){
        alert("El texto está en mayúscula");
    }else if (str === str.toLowerCase()) {
        alert("El texto está en minúscula");
    } else {
        alert("Es una mezcla de ambas.");
    }
}
mirarMayus(prompt('Escriba un texto'));