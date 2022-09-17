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
btn.addEventListener('click', iniciar);

function iniciar(event){
    const parrafo = id ( 'letras')
    const cant_palabras = palabras.length;
    const valor_al_azar = obtenerRandom( 0, cant_palabras);

    const palabrita = palabras[ valor_al_azar ];
    console.log(palabrita);
    const cantLetras = palabrita.length;

    for( let i = 0; i < cantLetras; i++){
        const p = document.createElement( 'p');
        parrafo.appendChild( p );
    }
}