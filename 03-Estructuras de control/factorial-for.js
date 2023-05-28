/* 
Ejercicio:
Este archivo debe calcular el factorial de 10 utilizando un solo bucle for.
*/

let num = 1
for(let i = 1; i <= 10; i++){
    num *= i;
    console.log(`El factorial de ${i} es ${num}`)
}