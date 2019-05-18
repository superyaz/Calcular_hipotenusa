'use strict'

function hypotenuse (a, b){
    a = prompt("Ingrese un numero por favor: ");
    b = prompt("Ingrese un numero por favor: ");
     let operacion = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    document.getElementById("resultado").innerHTML = operacion;
}
hypotenuse();
