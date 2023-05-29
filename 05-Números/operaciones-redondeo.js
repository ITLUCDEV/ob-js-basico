// Números

// Declaración de variables numéricas (enteros y con decimales)
let a = 5;
let b = 0.1;

console.log(a)
console.log(b)

// Precisión (ocurre por cómo javascript asigna memoria a cada una de las variables)
let c = 0.2
console.log(b + c)
console.log(b * c)
// Pequeño truco para obtener valores "reales"
console.log(Math.round((0.1 + 0.2) * 100)/100)

// Principales operaciones aritméticas
let d = 3.5
let e = 4.8

// --> [+] Suma
console.log(d + e)

// --> [-] Resta
console.log(d - e)

// --> [*] Multiplicación
console.log(d * e)

// --> [/] División
console.log(d / e)


// Representación de los números en cadenas de texto
console.log(typeof a)
console.log(a)
let a_s = a.toString()

console.log(a_s)
console.log(typeof a_s)


// Redondeo de números decimales
let f = 3.3
let g = f * 3

console.log(g)

// toFixed(x) --> Limita el número de decimales al valor x
console.log(g.toFixed(0))
console.log(g.toFixed(2))
console.log(typeof g.toFixed(2)) // [!] Hay que tener cuidado porque nos lo pasa a string

// toPrecision(x) --> Realiza un redondeo científico limitando el número de cifras significativas
let h = 1839.123456789
console.log(h.toPrecision(7))
console.log(g.toPrecision(7))

console.log(typeof g.toPrecision(7))