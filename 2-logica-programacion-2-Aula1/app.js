let numeroSecreto = generarNumeroSecreto ();

console.log(numeroSecreto);


function asignarTextoElemento(elemento, texto){

    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
    return;

}

function verificarIntento (){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   console.log(typeof(numeroDeUsuario));
   console.log(numeroSecreto);
   console.log(typeof(numeroSecreto));
   console.log(numeroSecreto);
   console.log(numeroDeUsuario === numeroSecreto);
    return;
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;

    
}


asignarTextoElemento('h1', 'Juego del numero secreto');
asignarTextoElemento('p', 'Indica un numero del 1 al 100');