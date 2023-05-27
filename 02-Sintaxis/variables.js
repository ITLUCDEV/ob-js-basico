// VARIABLES
var variable;
let variabLet;

// tip shortcut: ctrl + ç = comenta la(s) línea(s) seleccionada(s)
const constante = "Hola soy una constante"; // const es la más utilizada en angular & react

var a = 1; 
console.log(a);

a = 4;
console.log(a);

console.log(constante);
// constante = "Adiós" => Devuelve un error

let b = 3;
console.log(b);

b = 5;
console.log(b);

// Diferencia entre let y var
// Var afepta a TODO el código
// Let sólo afepta al BLOQUE donde esté SIENDO DECLARADO

var variable = "Hola soy una variable VAR"

for(var i = 0; i < 3; i++){
    var variable =  "Soy la segunda variable" // mala práctica / solo para uso didáctico
} 
console.log(variable)



let variableLet = "Hola soy una variable LET"

for(var i = 0; i < 3; i++){
    let variableLet =  "Soy la segunda variable LET" // mala práctica / solo para uso didáctico
} 
console.log(variableLet)

// Uso de typeof para identificar tipos de variables

var num = 4;

console.log(typeof "1")
console.log(typeof variableLet)
console.log(typeof null)
console.log(typeof variabLet)

console.log(typeof num)

num = "Hola soy num" // Esto es MALA práctica, solo uso didáctico

console.log(typeof num)



