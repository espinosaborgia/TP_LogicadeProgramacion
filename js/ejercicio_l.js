let v=[];
let primo = true;
let c = 0;
let elements = 0;

for(c=0;c<10;c++){
    elements = prompt(`Ejercicio L \nPor favor ingrese el ${+c+1}° numero:`);
    while((elements === null) || (elements.trim() === "") || (isNaN(elements))) {
        elements = prompt("El valor ingresado no es numérico, Ingrese nuevamente un numero");
    }
v.push(elements);
}

for(c=0;c<10;c++){
    primo=true;
    if((+v[c]===0) || (+v[c] === 1) || (+v[c]===4)){
        primo = false;
    }
    for(i=2;i<(+v[c]/2);i++){
        if(+v[c]%+i===0){
            primo=false;
        }
    }
    if (primo==true){
        console.log(`El numero ${v[c]} es primo`);
    }else{
        console.log(`El numero ${v[c]} no es primo`);
    }

}