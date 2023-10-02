let vector=[];
let salir= false;
let c = 0;
let elements = 0;
let promedio = 0;
while(!salir){
    elements = prompt(`Ejercicio B \nPor favor ingrese la calificación del ${+c+1}° alumno:`);
    while((elements === null) || (elements.trim() === "") || (isNaN(elements))) {
        elements = prompt("El valor ingresado no es numérico, Ingrese nuevamente la calificación");
    }
vector.push(elements);
c++;
if (c>=5){ salir = confirm("Desea salir?")}
}
elements = 0;
for (c = 0; c < vector.length; c++) {
    console.log(`La calificación del ${+c+1}° alumno es: ${vector[c]}`);
    elements = elements + +vector[c];
}
promedio = +elements / +c
console.log(`La suma de los números es: ${promedio}`);