// .sort () --> Modifica el array
const array = [2, 5, 9, 15, 1, 2, 0, 4]
console.log(array)

array.sort((a, b) => {
    if (a < b){
        return -1
    } else if (a > b){
        return +1
    } else{
        return 0
    }
})

console.log(array)

// Ordenar únicamente arrays numéricos
const arrayNumerico = [4, 1, 7, 3, 1, 3, 56, 1, 546]
// De menor a mayor
arrayNumerico.sort((a, b) => a - b)
console.log(arrayNumerico)
// De mayor a menor
arrayNumerico.sort((a, b) => b - a)
console.log(arrayNumerico)

// Método interesante para utilizar sobre un array de objetos
const listaObjetos = [
    { nombre: "Leire", edad: "35" },
    { nombre: "Gorka", edad: "34" },
    { nombre: "Miguel", edad: "28" },
    { nombre: "Lucia", edad: "31" },
    { nombre: "Amaia", edad: "29" }
]

/* listaObjetos.sort((a, b) => {
    if(a.edad < b.edad){
        return -1
    } else if (a.edad > b.edad){
        return +1
    } else {
        return 0
    }
}) */

listaObjetos.sort((a, b) => a.edad - b.edad)
console.log(listaObjetos)