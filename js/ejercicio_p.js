let v=[];
let c =0;
let item;

for(c=0;c<5;c++){
    item = prompt(`Ejercicio P \nPor favor ingrese el ${+c+1}° de 5 elementos del array:`);
    while((item === null) || (item.trim() === "")) {
        item = prompt("El elemento ingresado esta vacio, Ingrese nuevamente un elemento");
    }
v.push(item);
}
console.log(`El vector ingresado es: ${v}`)
item=v[v.length-1];
for(c=0;c<4;c++){
    v[v.length-1-c]=v[v.length-2-c];
}
v[0]=item;
console.log(`el vector modificado es:${v}`);