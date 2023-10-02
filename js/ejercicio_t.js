let lado =[];
let c=0;
let perimetro=0;

for(c=0;c<3;c++){
    lado[c] = prompt(`Ejercicio T \nPor favor ingrese el valor del ${+c+1}° lado del triangulo en cm:`);
    while((lado[c] === null) || (lado[c].trim() === "") || (isNaN(lado[c]))) {
        lado[c] = prompt("El valor ingresado no es valido, Ingrese nuevamente el valor");
    }
}

perimetro = +lado[0] + +lado[1] + +lado[2]

alert(`El triangulo tiene un perimetro de base ${perimetro.toFixed(2)} cm`);
