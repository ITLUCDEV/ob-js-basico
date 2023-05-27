// Arrays (AKA Listas)
const array = [1, 2, 3, 4, "hola"];
console.log(array);

const array2 = new Array(1, "hola", true, undefined, null);
console.log(array2);

const array3 = new Array(3);
array3[0] = "Soy el primer elemento";
console.log(array3);

const array4 = [array, array2, array3]
console.log(array4);


// Objetos
const movil = {
    altura: 10,
    anchura: 5,
    marca: "Xiaomi",
    isWhite: false,
    contactos: ["Gorka", "Martín", "Raúl"],
    tarjeta: {
        marca: "Sandisk",
        almacenamiento: 32
    }
}
movil.fabricacion = 2019;
movil.tarjeta.marca = "Samsung"

console.log(movil.contactos)
console.log(movil.tarjeta.marca)
console.log(movil.fabricacion)


// Fechas
// Librería de apoyo --> Moment.js
const ahora = new Date()
console.log(ahora)

const fecha_milis = new Date(10) // utilizando los milisegundos
console.log(fecha_milis)

const fecha_cadena = new Date("March 25 2020")
console.log(fecha_cadena)

const fecha_valores = new Date(2022, 1, 15)
console.log(fecha_valores)

const dia = ahora.getDate()
const mes = ahora.getMonth() + 1
const year = ahora.getFullYear()


console.log(dia, mes, year)