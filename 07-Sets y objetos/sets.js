// Sets (conjuntos)
// La diferencia es que:
// Array: Conjunto ORDENADO de valores y objetos
// Sets: Conjunto NO ORDENADO de valores ÚNICOS (acepta objetos con el mismo valor al tener != referencia)
const array = [1, 2, 3, 4, 5, 6, 1, 2, 5, 7]

const miSet = new Set(array)

console.log(array)
console.log(miSet)

// Métodos que podemos utilizar en los Sets
// .add() --> Añade valores
miSet.add(9)
console.log(miSet)

// .delete() --> Elimina valores
miSet.delete(9)
console.log(miSet)

// .clear() --> Elimina todos los valores del set
const array2 = [0, 1, 2, 3, 4]
const miSet2 = new Set(array2)
console.log(miSet2)
miSet2.clear()
console.log(miSet2)

// .has() --> Nos dice si dentro del Set existe un valor
console.log(miSet.has(3))
console.log(miSet.has("hola"))

// .size --> Nos dice el número de valores que tiene el Set
console.log(miSet.size)

// Iteración de un Set
miSet.forEach(valor => {
    console.log(valor)
});

const it_miSet = miSet.values()
const ite_miSet = Array.from(it_miSet)
console.log(ite_miSet)

const ar_miSet = [...miSet]
console.log(ar_miSet)