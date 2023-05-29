// Cómo trabajar con listas (arrays / arreglos / vectores)
let var1 = 45
let array = [1, "Hola", true, {id: 5}, null, undefined, var1]

console.log(array)

// Acceder a los valores de un array a través de su posición
// array[indice] ==> 0, 1, 2, 3, 4, 5, 6...
console.log(array[1])
console.log(array[2])
console.log(array[3])
console.log(array[4])
console.log(array[5])
console.log(array[6])

// Métodos para introducir nuevos valores en nuestros arrays
// unshift() --> Introduce valores al principio del array
// push() --> Introduce valores al final del array

array.push("final", false)
console.log(array)

array.unshift("inicio")
console.log(array)

// Métodos para eliminar valores en nuestros arrays
// shift() --> Elimina valores al principio del array
// pop() --> Elimina valores al final del array

const array2 = [1, 3, "hola", false]
// Elimina valores al final
array2.pop()
console.log(array2)
// Elimina valores al principio
array2.shift()
console.log(array2)

// splice() --> Permite eliminar, modificar o añadir valores en nuestro array
const array3 = [1, 2, 3, 4, 5, 6]
// Eliminar valores ==> .splice(indice, numValoresAEliminar)
array3.splice(2, 1) // siendo 2 el índice de inicialización y 1 los valores que va a eliminar 
console.log(array3)
// Añadir valores ==> .splice(indice, 0, valoresParaAñadir)
array3.splice(5, 0, "Hola") 
console.log(array3)
// Modificar valores => .splice(indice, X, valoresParaModificar)
array3.splice(4, 1, 3)
console.log(array3)