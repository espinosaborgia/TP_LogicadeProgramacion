let vector=[];
let salir= false;
let c = 0;
let elements =0;
while(!salir){
    elements = prompt("Ejercicio A \nPor favor ingrese un numero:");
    while((elements === null) || (elements.trim() === "") || (isNaN(elements))) {
        elements = prompt("El valor ingresado no es numerico, Ingrese nuevamente un numero");
    }
vector.push(elements);
c++;
if (c>=5) salir = confirm("Desea salir?");
}
elements = 0;
for (c = 0; c < vector.length; c++) {
    console.log(`El ${+c+1}° elemento es: ${vector[c]}`);
    elements = elements + +vector[c];
}
console.log(`La suma de los numeros es: ${elements}`);