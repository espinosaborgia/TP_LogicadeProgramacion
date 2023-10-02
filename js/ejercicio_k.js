let vocal=[0,0,0,0,0];
let c=0;
let elements;

elements = prompt(`Ejercicio K \nPor favor ingrese una palabra:`);
while((elements === null) || (elements.trim() === "")) {
    elements = prompt("No ingreso nada, Ingrese una palabra");
}
console.log(`palabra ingresada es ${elements}`);

for(c=0;c<elements.length;c++){
    if(elements[c].toUpperCase() == "A"){
        vocal[0]= vocal[0] +1;
    }
    if(elements[c].toUpperCase() == "E"){
        vocal[1]= vocal[1] +1;
    }
    if(elements[c].toUpperCase() == "I"){
        vocal[2]= vocal[2] +1;
    }
    if(elements[c].toUpperCase() == "O"){
        vocal[3]= vocal[3] +1;
    }
    if(elements[c].toUpperCase() == "U"){
        vocal[4]= vocal[4] +1;
    }
}

if(+vocal[0]>0) console.log(`la vocal A se repitio ${vocal[0]-1} veces `);
if(+vocal[1]>0) console.log(`la vocal E se repitio ${vocal[1]-1} veces `);
if(+vocal[2]>0) console.log(`la vocal I se repitio ${vocal[2]-1} veces `);
if(+vocal[3]>0) console.log(`la vocal O se repitio ${vocal[3]-1} veces `);
if(+vocal[4]>0) console.log(`la vocal U se repitio ${vocal[4]-1} veces `);