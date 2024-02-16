let numeroSecreto = generarNumeroSecreto ();
let intentos = 1;

console.log(numeroSecreto);


function asignarTextoElemento(elemento, texto){

    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
    return;

}

function verificarIntento (){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   
   // vista en consola 
    //console.log(typeof(numeroDeUsuario));
   //console.log(numeroSecreto);
   //console.log(typeof(numeroSecreto));
   //console.log(numeroSecreto);
   console.log(numeroSecreto);
   console.log(intentos);
   if (numeroDeUsuario === numeroSecreto){
         asignarTextoElemento ('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

        }else {
            // el usuario no acerto
    if ( numeroDeUsuario > numeroSecreto ){
        asignarTextoElemento ('p','El numero secreto es menor');
    }else{
        asignarTextoElemento('p','El numero secreto es mayor');

    }
    intentos ++;
    limpiarCaja();
   }
    return;
}

function limpiarCaja (){
let valorCaja = document.querySelector('#valorUsuario');
valorCaja.value= '';

};

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;

    
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', 'Indica un numero del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    
}

function reiniciarJuego() {
    //Limpiar caja
    limpiarCaja();
    // Indicar mensaje de intervalo de numeros
   
    //generar el numero aleatorio
   
    

    // inicializar el numero de intentos
    condicionesIniciales();
    // desabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute ('disabled','true');

    
}


condicionesIniciales();