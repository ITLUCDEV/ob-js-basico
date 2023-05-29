// Iterar los valores de un array
const array = ["hola", 2, 5, 90, false, undefined]

// Forma antigua
for(let i = 0; i < array.length; i++){
    console.log(array[i])
}

// Forma ES6 (más eficiente) --> forEach()
let suma = 0
const arrayNums = [3, 6, 2, 77, 2, 3, 93, 19]
arrayNums.forEach(valor => {
    suma += valor
    console.log(valor)
})

console.log(suma)

// Búsqueda de un valor dentro de un array --> find()
const variable = array.find(valor => {
    if (valor === 90){
        return true
    }
})

console.log(variable)

const listaObjetos = [
    { nombre: "Leire", edad: "35" },
    { nombre: "Gorka", edad: "34" },
    { nombre: "Miguel", edad: "28" },
    { nombre: "Lucia", edad: "31" },
    { nombre: "Amaia", edad: "29" }
]

const objeto = listaObjetos.find(o =>{
    if (o.nombre === "Miguel"){
        return true
    }
}) 

const objeto2 = listaObjetos.find(o2 =>{
    return o2.nombre === "Miguel"
})

const objeto3 = listaObjetos.find(o3 => o3.nombre === "Miguel")

const { edad } = listaObjetos.find(o => o.nombre === "Miguel")

console.log(objeto)
console.log(objeto2)
console.log(objeto3.edad)
console.log(edad)
