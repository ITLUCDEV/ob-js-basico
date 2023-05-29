// Comparación de arrays
// .every() --> Si todos los elementos de un array cumplen una condición
const array = [4, 6, 7, 8, 3, 6, 2, 1, -4, -7, 12, 5, -40]

/* resultado = array.every(valor => {
    if (valor > 0){
        return true
    } else {
        return false
    }
}) */

const resultado = array.every(valor => valor > 0)
console.log(resultado)

// Comparación de arrays
const ar1 = [1, 2, 3, 4]
const ar2 = [1, 2, 3, 4]

console.log(ar1 === ar2)

const compararArrays = (array_1, array_2) => {
    if(array_1.length !== array_2.length) return false
    const res = array_1.every((valor, id) => valor === array_2[id])
    return res
}

console.log(compararArrays(ar1, ar2))

const ar3 = [1, 2, 3, 4, 5, 6]
console.log(compararArrays(ar1, ar3))