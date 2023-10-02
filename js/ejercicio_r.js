let fare=0;
let celsius=0;
let opcion=0;

fare = prompt(`Ejercicio R \nPor favor ingrese los grados Farenheit a convertir:`);
while((fare === null) || (fare.trim() === "") || (isNaN(fare))) {
    fare = prompt("El valor ingresado no es valido, Ingrese nuevamente el valor");
}
celsius =(+fare -32) * (5/9)
alert(`Los ${fare}° Farenheit convertidos a celsius son ${celsius.toFixed(2)}`);