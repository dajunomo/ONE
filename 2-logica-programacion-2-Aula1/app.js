let numeroSecreto = generarNumeroSecreto ();

console.log(numeroSecreto);


function asignarTextoElemento(elemento, texto){

    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
    return;

}

function verificarIntento (){

    alert('Click desde el boton');

}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;

    
}


asignarTextoElemento('h1', 'Juego del numero secreto');
asignarTextoElemento('p', 'Indica un numero del 1 al 100');