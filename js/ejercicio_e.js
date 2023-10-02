let c = 0;
let base = 0;
let potencia = 0;
let resultado =1;

base = prompt("Ejercicio E \nIngrese un número:");
while((base === null) || (base.trim() === "") || (isNaN(base))) {
    base = prompt("El valor ingresado no es numérico, Ingrese nuevamente un número");
}
potencia = prompt("Ingrese la potencia a la que desea elevarlo:");
while((potencia === null) || (potencia.trim() === "") || (isNaN(potencia))) {
    potencia = prompt("El valor ingresado no es numérico, Ingrese nuevamente la potencia a la que desea elevarlo");
}

for(c=0;c < +potencia;c++){
    resultado= +resultado * +base;
}

console.log(`el Numero ${base} elavado a ${potencia} es igual a ${resultado}`)

