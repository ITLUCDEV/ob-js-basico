/* 
Ejercicio:
Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break.
*/

let i = 1;
let num = 10;
let fact = 1;
while (i < num){
    fact *= num
    num--
    if (num === 1){
        break;
    }
}
console.log(`El factorial es ${fact}`)
