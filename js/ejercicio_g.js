let vector=[];
let salir= false;
let c = 0;
let elements = 0;
let encontrado=false;

while(!salir){
    elements = prompt(`Ejercicio G \nPor favor ingrese el ${+c+1}° de 10 números:`);
    while((elements === null) || (elements.trim() === "") || (isNaN(elements))) {
        elements = prompt("El valor ingresado no es numérico, Ingrese nuevamente el número");
    }
vector.push(elements);
console.log(`El numero ingresado es ${vector[c]}`);
c++;
if (+c===10){ salir = true}
}
elements = prompt(`Ingrese el numero a buscar entre los anteriores:`);
while((elements === null) || (elements.trim() === "") || (isNaN(elements))) {
    elements = prompt("El valor ingresado no es numérico, Ingrese nuevamente el número");
}
console.log(`El numero a buscar es ${elements}`);
for (c = 0; c < vector.length; c++) {
    if(+vector[c] === +elements){
        encontrado=true;
    }
}
if (encontrado){
    console.log(`El numero ${elements} si se encuentra entre los valores cargados`);
}else{
    console.log(`El numero ${elements} si no se encuentra entre los valores cargados`);
}
