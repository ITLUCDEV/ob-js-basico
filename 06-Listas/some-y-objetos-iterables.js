// Cómo saber si ALGUNOS de los elementos del array cumplen una condición
// .some()
const array = [3, 7, 2, 4, 7, 9, 42, 35, 7865, 23, -2]

const res = array.some(valor => valor < -10)
console.log(res)

const existe = array.some(valor => valor === 9)
console.log(existe)

const listaObjetos = [
    { nombre: "Leire", edad: "35" },
    { nombre: "Gorka", edad: "34" },
    { nombre: "Miguel", edad: "28" },
    { nombre: "Lucia", edad: "31" },
    { nombre: "Amaia", edad: "29" }
]

const existeMiguel = listaObjetos.some(persona => persona.nombre === "Miguel")
console.log(existeMiguel)

// Obtención de un array a partir de un objeto iterable
// Un objeto iterable es un objeto especial que nos permite iterar a través de ellos (ej. string)
// [!] No muy utilizado, importante de conocer igualmente
const str = "Hola, soy Luis"
console.log(str[0]) 

// Array.from()
const ar_str = Array.from(str)
console.log(ar_str)

const set = new Set([2, 3, "hola", 4])
const ar_set = Array.from(set)
console.log(ar_set)

// Obtener un iterable de todos los índices de nuestro array
// .keys()
const keys = array.keys()
console.log(keys)

const ar_keys = Array.from(keys)
console.log(ar_keys)