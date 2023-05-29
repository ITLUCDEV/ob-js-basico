// Declarando de forma distinta un número
let a = 2
let b = new Number(3) // forma distinta de declarar la variable, similar a declarar un Int o un Float

console.log(a)
console.log(b)
console.log(a + b)
// valueOf() --> Obtiene valores numéricos a partir de literales
console.log(b.valueOf())

// NaN (Not a Number)
let n = Number('adios')
console.log(n)

// Infinity
let numerador = 19
let divisor = 0

let divisor_2 = null

console.log(numerador / divisor)
console.log(numerador / divisor_2)

// Conversión de un String a valores numéricos con Number, parseInt y parseFloat
let numero = '5.89'
let num2 = 17.2

console.log(typeof numero)
console.log(numero + num2) // [!] Nos está concatenando ambos resultados, no haciendo la operación

// Number
console.log(Number(numero))
console.log(Number(numero) + num2)

// parseInt
console.log(parseInt(numero)) // Nos quedamos con la parte entera

// parseFloat
console.log(parseFloat(numero)) // Nos quedamos con la parte decimal

// Números hexadecimales (base 16) --> Recordar que hexadecimales son números enteros, nunca llevan decimales
let numHex = '0x3a5b7'
console.log(parseInt(numHex, 16)) // el 16 hace referencia a la base del hexadecimal

// Obtención de valores máximos y mínimos que podemos obtener en JS
let min_precision = Number.EPSILON
let min_valor_JS = Number.MIN_VALUE
let max_valor_JS = Number.MAX_VALUE

console.log(min_precision)
console.log(min_valor_JS)
console.log(max_valor_JS)