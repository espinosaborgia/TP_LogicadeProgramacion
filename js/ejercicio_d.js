let vector=[];
let c = 0;
let elements = 0;

for(c=0;c<10;c++){
    elements = prompt(`Ejercicio D \nPor favor ingrese el ${+c+1}° numero:`);
    while((elements === null) || (elements.trim() === "") || (isNaN(elements))) {
            elements = prompt("El valor ingresado no es numérico, Ingrese nuevamente un numero");
        }
    vector.push(elements);
    let ultimoNumero = vector[c][vector[c].length-1]
    if ((+ultimoNumero===0) || (+ultimoNumero===2) || (+ultimoNumero===4) || (+ultimoNumero===6) || +(ultimoNumero===8)){
        console.log(`el numero ${vector[c]} es Par`);
    }else{
        console.log(`el numero ${vector[c]} es Impar`);
    }
}
