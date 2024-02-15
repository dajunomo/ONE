let numeroSecreto = generarNumeroSecreto ();

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
   if (numeroDeUsuario === numeroSecreto){
         asignarTextoElemento('p','Acertaste el numero');
   } else {
    if ( numeroDeUsuario > numeroSecreto ){
        asignarTextoElemento ('p','El numero secreto es menor');
    }else{
        asignarTextoElemento('p','El numero secreto es mayor');

    }

   }




    return;
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;

    
}


asignarTextoElemento('h1', 'Juego del numero secreto');
asignarTextoElemento('p', 'Indica un numero del 1 al 100');