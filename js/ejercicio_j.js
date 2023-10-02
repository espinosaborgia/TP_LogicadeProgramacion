let salir = false;
let elements=0;
let pos =0;
let c=0;
let i=0;
let largo=[];
let vector=[];

while(!salir){
    elements = prompt(`Ejercicio J \nPor favor ingrese una palabra:`);
    while((elements === null) || (elements.trim() === "")) {
        elements = prompt("No ingreso nada, por favor ingrese una palabra:");
    }
vector.push(elements);
c++;
if (c>=5){ salir = confirm("Desea Terminar la carga?")}
}
elements=0;
for(c=0;c<vector.length;c++){
    i=0;
    while(vector[c][i]!=null){
        i++;
    }
    largo[c]=i;
    console.log(`La ${+c+1}° palabra es ${vector[c]} y tiene un largo de ${largo[c]} letras`);
    if (+largo[c]>+elements){
        elements= largo[c];
        pos=c;
    }
}

console.log(`La palabra mas larga es ${vector[pos]} con una longitud de ${elements} letras`);
