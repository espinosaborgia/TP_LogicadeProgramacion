let horas =0;
let minutos=0;
let segundos=0;

horas = 100000 /3600;
minutos=(+horas - Math.trunc(horas))*60;
segundos= (+minutos - Math.trunc(minutos))*60;
alert(`100.000.000 milisegundos convertidos a Horas y Minutos son ${Math.trunc(horas)} Hs. \n con ${Math.trunc(minutos)} min. y ${segundos.toFixed(2)} seg.`);