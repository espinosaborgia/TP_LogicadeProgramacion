let base =0;
let altura=0;
let area=0;

base = prompt(`Ejercicio T \nPor favor ingrese el valor de la base del triangulo en cm:`);
while((base === null) || (base.trim() === "") || (isNaN(base))) {
    base = prompt("El valor ingresado no es valido, Ingrese nuevamente el valor");
}

altura = prompt(`Ejercicio T \nPor favor ingrese el valor de la altura del triangulo en cm:`);
while((altura === null) || (altura.trim() === "") || (isNaN(altura))) {
    altura = prompt("El valor ingresado no es valido, Ingrese nuevamente el valor");
}

area = (+base * +altura)/2

alert(`El triangulo de base ${base} y altura ${altura} tiene un perimetro de base ${area.toFixed(2)} cm`);