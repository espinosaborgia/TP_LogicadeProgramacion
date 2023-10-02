let v=[];
let r=[];
let salir = false;
let c=0;
let i=0;
let elements =0;

while(!salir){
    elements = prompt(`Ejercicio I \nPor favor ingrese el ${+c+1}° numero:`);
    while((elements === null) || (elements.trim() === "") || (isNaN(elements))) {
        elements = prompt("El valor ingresado no es un peso valido, Ingrese nuevamente un numero");
    }
v.push(elements);
console.log(`El numero ingresado es ${v[c]}`);
c++;
if (c>=11){ salir = confirm("Desea Terminar la carga?")}
}

for(i=0;i<v.length;i++){
    for(c=0;c<v.length;c++){
        if(+v[i] === +v[c]){
            if (isNaN(r[i])){
                r[i]=-1;
            }
            r[i]= r[i] +1;
        }
    }
}

for(c=0;c<v.length;c++){
    console.log(`El ${+c+1}° numero es ${v[c]} y se repitio ${r[c]} veces `);
}
