// Comparaciones

// Igualdad
if (5 == 5){ // Igualdad débil (solo compara el valor)
    console.log("5 es igual a 5")
}

if (5 === 5){ // Igualdad fuerte (compara el valor y el tipo)
    console.log("5 es muy igual a 5")
}

/*
Por lo tanto;
== sólo compara el valor
=== compara el valor y el tipo
*/

let a = 5;
console.log(typeof a)
let b = "5";
console.log(typeof b)

if(a == b) {
    console.log("a es igual a b -> Debil")
}

if (a === b){
    console.log("a es igual a b -> Fuerte")
}

// Desigualdad

let c = 4;
let d = "4";

// Desigualdad básica (!= es diferente)
if (c != d){
    console.log("C es diferente a D -> Debil")
}

if (c !== d){
    console.log("C es diferente a D -> Fuerte")
}

// Comparaciones mayor que y menor que
let max = 10;
let min = 5;

if (max > min){
    console.log("Max es mayor que min")
}

if (max >= 10){
    console.log("Max es mayor o igual que 10")
}

if (min < max){
    console.log("Min es menor que max")
}

if (min <= max){
    console.log("Min es menor o igual que max")
}