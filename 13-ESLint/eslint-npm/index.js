const nombre = "Luis"
console.log(nombre)

// En esta línea quiero desactivar la regla de las comillas dobles

// Opción 1 --> Eliminar eslint del todo
/* eslint-disable */
const nombre2 = 'Maria'
/* eslint-enable */

// Opción 2 --> Eliminar eslint de la línea
const nuevoString = 'Gorka' // eslint-disable-line

// Opción 3 --> Desabilitar la siguiente linea
/* eslint-disable-next-line */
const nuevaString = 'Jose'

// Opción 4 --> Eliminar una regla en concreto
/* eslint-disable-next-line quotes*/
const otroString = 'Amigo'