let pesos=0;
let dollar=0;
let opcion=0;

pesos = prompt(`Ejercicio Q \nPor favor ingrese el importe en $ que desea convertir:`);
while((pesos === null) || (pesos.trim() === "") || (isNaN(pesos))) {
    pesos = prompt("El importe ingresado no es valido, Ingrese nuevamente el importe en $");
}

opcion = prompt(`Ejercicio Q \nPara convertir a U$S Oficial ingrese 1 \nPara convertir a U$S Blue ingrese 2`);
while((opcion === null) || (opcion.trim() === "") || (isNaN(opcion)) || ((+opcion<1)||(+opcion>2))) {
    opcion = prompt("La opcion ingresada no es valida, reintente nuevamente");
}

if (opcion==1){
    dollar= +pesos * 365.50
    alert(`el importe de $ ${pesos} convertido a U$S Oficial es: ${dollar}`);
}else{
    dollar= +pesos * 790
    alert(`el importe de $ ${pesos} convertido a U$S Blue es: ${dollar}`);
}

