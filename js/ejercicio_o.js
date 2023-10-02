let v=[];
let c=0;
let item;

item = prompt("Ejercicio O \nPor favor ingrese un numero entre 3 y 4 digitos:");
while((+item.length<3) || (+item.length>4)) {
    item = prompt("El numero ingresado debe tener entre 3 y 4 cifras , Ingrese nuevamente un elemento");
}
v.push(item);
console.log(`El numero ingresado es ${item}`);
for(c=0;c<item.length;c++){
    v[c]= +item[c] * Math.pow(10,+item.length-c-1);
}
console.log(`El vector obtenido es: ${v}`);

