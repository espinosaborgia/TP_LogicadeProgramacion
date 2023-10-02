let vec1=[];
let vec2=[];
let vec3=[];
let c =0;
let i=0;
let x=0;
let item;

for(c=0;c<10;c++){
    item = prompt(`Ejercicio N \nPor favor ingrese el ${+c+1}° de 10 elementos del Primer Array:`);
    while((item === null) || (item.trim() === "")) {
        item = prompt("El elemento ingresado esta vacio, Ingrese nuevamente un elemento");
    }
vec1.push(item);
}

for(c=0;c<10;c++){
    item = prompt(`Ejercicio N \nPor favor ingrese el ${+c+1}° de 10 elementos del Segundo Array:`);
    while((item === null) || (item.trim() === "")) {
        item = prompt("El elemento ingresado esta vacio, Ingrese nuevamente un elemento");
    }
vec2.push(item);
}

for(c=0;c<10;c++){
    for(i=0;i<10;i++){
        if(vec1[c]==vec2[i]){
            vec3[x]=vec1[c];
            x++;
        }
    }
}
console.log("Los elementos similares estan en el Array 3 y son:")
if(+vec3.length>0){
    for(c=0;c<vec3.length;c++){
        console.log(vec3[c]);
    }
}else{
    console.log("no existen elementos similares en los vectores")
}