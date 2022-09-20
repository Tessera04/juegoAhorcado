/* Funcion seleccionar ID */
function id( str ){
    return document.getElementById( str );
}

/* Funcion Random */
function obtenerRandom (num_min, num_max){
    const amplitud_valores = num_max - num_min;
    const valor_al_azar = Math.floor(Math.random() * amplitud_valores) + num_min;
    return valor_al_azar;
}

/* Funcion limpiar */

function limpiar(){
    return document.getElementsByClassName("clear")[0].value="";
}

/* Funcion atras */

function cancelar(){
    newPalabras.splice(0,newPalabras.length);
    window.location
}