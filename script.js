let palabrita;
let cantErrores = 0;
let cantAciertos = 0;

const palabras = [
    'MANZANA',
    'BANANA',
    'MANDARINA',
    'UVA',
    'POMELO',
    'ALURA',
    'FRESA',
    'DURAZNO',
    'MANGO',
    'PAPAYA'
];


const btn = id('nuevaPalabra');
const imagen = id( 'img' );
const btnLetras = document.querySelectorAll( "#btnLetras button");

btn.addEventListener('click', iniciar);

/* Click en iniciar juego */ 
function iniciar(event){
    imagen.src = './imagenes/ahorcado0.png'
    btn.disabled = true;
    cantErrores = 0;
    cantAciertos = 0;

    const parrafo = id ( 'letras' );
    parrafo.innerHTML = ' ';

    const cant_palabras = palabras.length;
    const valor_al_azar = obtenerRandom( 0, cant_palabras);

    palabrita = palabras[ valor_al_azar ];
    console.log(palabrita);
    const cantLetras = palabrita.length;
    for( let i = 0; i < btnLetras.length; i++){
        btnLetras[i].disabled = false;
    }

    for( let i = 0; i < cantLetras; i++){
        const p = document.createElement( 'p');
        parrafo.appendChild( p );
    };
};

/* click de adivinar letra */

for( let i = 0; i < btnLetras.length; i++){
    btnLetras[i].addEventListener( 'click', clickLetras );
}

function clickLetras(event){
    
    const ps = document.querySelectorAll( '#letras p')
    const button = event.target;
    button.disabled = true;
    const letra = button.innerHTML;
    const palabra = palabrita;

    let acerto = false;
    for( let i = 0; i < palabra.length; i++ ){
        if( letra == palabra[i] ){
            ps[i].innerHTML = letra;
            cantAciertos++;
            acerto = true;
        }
    }

    if( acerto == false){
        cantErrores++;
        const source = `./imagenes/ahorcado${cantErrores}.png`
        
        imagen.src = source;
    }


    if( cantErrores == 7){
        alert( "Perdiste, la palabra era " + palabra)
        gameOver();
    }else if ( cantAciertos == palabra.length ) {
        alert("Ganasteeee")
        gameOver();
    }
    console.log ( acerto )
};

/* Fin del juego */

function gameOver(){
    for( let i = 0; i < btnLetras.length; i++){
        btnLetras[i].disabled = true;
    }

    btn.disabled = false;
}

gameOver();