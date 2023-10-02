let c=0;
let i=0;
let j=0;
let k=0;
let x=0;
let linea="";
let espacio=0;

espacio = 14;
for(c=0;c<15;c++){
    linea=""
    for(i=0;i<espacio;i++){
        linea = linea.concat("","&nbsp");
    }
    for(j=0;j<=c;j++){
        linea = linea.concat("","*")
    }
    document.write(linea);
    document.write("<br/>")
    espacio--;
}

document.write("<br/>");

for(c=0;c<9;c++){
    linea="";
    for(i=0; i<18;i++){
        linea= linea.concat("","*");
    }
    document.write(linea);
    document.write("<br/>");
}