let vector=[];
let vectorM=[];
let salir= false;
let c = 0;
let elements = 0;

while(!salir){
    elements = prompt(`Ejercicio F \nPor favor ingrese el ${+c+1}° de 5 números:`);
    while((elements === null) || (elements.trim() === "") || (isNaN(elements))) {
        elements = prompt("El valor ingresado no es numérico, Ingrese nuevamente el número");
    }
vector.push(elements);
console.log(`El numero ingresado es ${vector[c]}`);
c++;
if (+c===5){ salir = true}
}
elements = prompt(`Ingrese un numero por el cual se multiplicaran los anteriores:`);
while((elements === null) || (elements.trim() === "") || (isNaN(elements))) {
    elements = prompt("El valor ingresado no es numérico, Ingrese nuevamente el número");
}
console.log(`El numero multiplicador es ${elements}`);
for (c = 0; c < vector.length; c++) {
    vectorM[c] = +vector[c] * +elements;
    console.log(`${vector[c]} X ${elements} = ${vectorM[c]}`);
}
