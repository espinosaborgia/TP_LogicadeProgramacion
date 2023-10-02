let vector=[];
let salir= false;
let c = 0;
let i=0;
let b=0;
let elements = 0;

for(c=0;c<5;c++){
    elements = prompt(`Ejercicio H \nPor favor ingrese el ${+c+1}° de 5 números:`);
    while((elements === null) || (elements.trim() === "") || (isNaN(elements))) {
        elements = prompt("El valor ingresado no es numérico, Ingrese nuevamente el número");
    }
vector.push(elements);
console.log(`El numero ingresado es ${vector[c]}`);
}

for(i=0;i<+vector.length-1;i++){
    b = +vector.length-i-1;
    for (c = 0; c < b; c++) {
        if(+vector[c]>+vector[b]){
            elements=vector[c];
            vector[c]=vector[b];
            vector[b]=elements;
        }
    }
}
console.log('la lista ordenada ascendente es:')
for(c=0; c<vector.length; c++){
    console.log(vector[c]);
}

console.log('la lista ordenada descendente es:')
for(c=0; c<vector.length; c++){
    console.log(vector[+vector.length-1-c]);
}