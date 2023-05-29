// Concatenación de arrays mediante el método .concat()
const lista1 = ["hola", 2, false, null]
const lista2 = ["adios", 8, true, undefined]
const lista3 = lista1.concat(lista2)

console.log(lista1)
console.log(lista2)
console.log(lista3)

// Concatenación de arrays mediante el factor de propagación
console.log(...lista3)

const lista4 = [...lista1, ...lista2]
console.log(lista4)

// [!] --> ESTO SERÍA UN ERROR POR MAL ENTENDER EL CONCEPTO DEL FACTOR DE PROPAGACIÓN
const lista5 = [lista1, lista2] // No usamos el factor de propagación, por lo que nos engloba ambos arrays.
console.log(lista5)