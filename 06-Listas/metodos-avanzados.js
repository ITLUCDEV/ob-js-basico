// Métodos avanzados
// .map()
// .filter()
// .reduce()

const array = ["Vigo", "Madrid", "Málaga", "Valencia", "Bilbao"]

const val = array.forEach(v => {
    console.log(v)
    return 4
})

console.log(val)

// .map()
// Obtenemos los datos del array, y añadimos el parámetro id para "concatenarlo"
const newArray = array.map((valor, id) => `${id+1} - ${valor}`)

console.log(newArray)

// .filter()
// Obtiene resultados según el filtro que declaremos
const listaObjetos = [
    { nombre: "Leire", edad: "35" },
    { nombre: "Gorka", edad: "34" },
    { nombre: "Miguel", edad: "28" },
    { nombre: "Lucia", edad: "31" },
    { nombre: "Amaia", edad: "29" }
]

/* const mayores = listaObjetos.filter(obj => {
    if(obj.edad > 30){
        return true
    } else {
        return false
    }
}) */

const mayores = listaObjetos.filter(obj => obj.edad > 30)
console.log(mayores)

const nuevaLista = listaObjetos.filter(obj => obj.nombre !== "Miguel")
console.log(nuevaLista)

// .reduce()
// Obtiene un valor a partir de un array

const valores = [3, 56, 23, 5, 90, 100]

const suma = valores.reduce((acumulado, actual, i, arrayOriginal) => {
    console.log(acumulado)
    console.log(actual)
    console.log(i)
    console.log(arrayOriginal)
    return acumulado + actual
})

console.log(suma)