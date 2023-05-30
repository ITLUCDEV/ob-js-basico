// Funciones tipo flecha
const array = [1, 5, 6, 2, 7, 12, 8, 92]
const dobleDelValor = valor => valor * 2
console.log(dobleDelValor(12))

const array2 = array.map(valor => valor * 2) // Función anónima
const array3 = array.map(dobleDelValor)


console.log(array2)
console.log(array3)

// Funciones tipo anónimas