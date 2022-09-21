/* Botones selectores */

const playBtn = document.querySelector('.jugarInicio');
const addWordBtn = document.querySelector(".addWordInicio");
const saveBtn = document.querySelector(".saveWord");
const inicioBtn = document.querySelector(".goInicio");
const cancelBtn = document.querySelector(".cancelGame");
const inicio2Btn = document.querySelector(".inicioGame");

/* Variables */
const inputPalabra = id('textoIn')[0];

/* Selectores de pantalla */

const mainScreen = document.querySelector("inicio");
const addScreen = document.querySelector(".addWord");
const gameScreen = document.querySelector(".gameScreen");

function inicio() {
    id('#inicio').style.display = "block";
}

function irAlJuego() {
    id('inicio').style.display = "none";
    id('gameScreen').style.display = "block";
}

function irAlInicio(){
    id('inicio').style.display = "block";
    id('gameScreen').style.display = "none";
    id('addWord').style.display = "none";
}

function addWord(){
    id('inicio').style.display = "none";
    id('addWord').style.display = "block";
}

function desistir() {
    iniciar().style.display = "none";
    gameOver().style.display = "none";
    id("gameScreen").style.display = "none";
    id("inicio").style.display = "block";
}

/* Funcion agregar palabras */

id('saveWord').onclick = () => {
    let input = inputPalabra.value

    if(input!=''){
        gameScreen.addWord(input);
        inputPalabra.value = '';
        
        return
    }
}