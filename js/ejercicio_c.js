let vector=[];
let vector2=[];
let vector3=[];
let salir= false;
let c = 0;
let i = 0;
let elements = 0;
let mayor1 = 0;
let mayor2 =0;
let mayor3 =0;

while(!salir){
    elements = prompt(`Ejercicio C \nPor favor ingrese el peso en kilos del ${+c+1}° pez:`);
    while((elements === null) || (elements.trim() === "") || (isNaN(elements))) {
        elements = prompt("El valor ingresado no es un peso valido, Ingrese nuevamente el peso en kg. del pez");
    }
vector.push(elements);
console.log(`El ${+c+1}° pescador saco un pez de ${vector[c]} kilos`);
c++;
if (c>=5){ salir = confirm("Desea Terminar la carga?")}
}

for (c = 0; c < vector.length; c++) {
    if (+vector[c]>+mayor1) {
        if (c>0){
            vector2[i]=mayor1;
            i++;
            mayor1= vector[c];
        }else{
            mayor1= vector[c];
        }

    }else{
        vector2[i]=vector[c];
        i++;
    }
}

i=0;
for (c = 0; c < vector2.length; c++) {
    if (+vector2[c]>+mayor2) {
        if (c>0){
            vector3[i]=mayor2;
            i++;
            mayor2= vector2[c];
        }else{
            mayor2= vector2[c];
        }

    }else{
        vector3[i]=vector2[c];
        i++;
    }

}

i=0;
for (c = 0; c < vector3.length; c++) {
    if (+vector3[c]>+mayor3) {
        mayor3= vector3[c];
    }

}

console.log(`El 1° pez mas grande pesa ${mayor1} Kg.`);
console.log(`El 2° pez mas grande pesa ${mayor2} Kg.`);
console.log(`El 3° pez mas grande pesa ${mayor3} Kg.`);
