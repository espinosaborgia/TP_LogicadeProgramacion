let fibo =0;
let c =0;
let num1=0;
let num2=1;
console.log(num1);
console.log(num2);
while(fibo<233){
    fibo= +num1 + +num2;
    num1=num2;
    num2=fibo;
    console.log(fibo);
}