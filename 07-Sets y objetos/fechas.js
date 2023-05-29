// Fechas
const fecha = new Date()
console.log(fecha)
// [!] --> Recordatorio: Meses comienzan desde el index 0
const fecha2 = new Date(2004, 02, 10) // Año, Mes, Día
console.log(fecha2)

const fecha3 = new Date(-1000000) // Milisegundos
console.log(fecha3)

const fecha4 = new Date("October 13, 1979 12:15:30") // Mes, Día, Año, Hora?, Minuto?, Segundo?
console.log(fecha4)

const fecha5 = new Date(2004, 02, 10)

console.log(fecha > fecha2)
console.log(fecha3 < fecha4)

console.log(fecha2 === fecha5) // NO SE PUEDE COMPARAR FECHAS DE ESTA MANERA
console.log(fecha2.getTime() === fecha5.getTime()) // Usamos getTime() para transformar a ms

// Obtener el día, el mes y el año de una fecha
// Obtener el día -> getDate()
console.log(fecha2.getDate())
// Obtener el mes --> getMonth()
console.log(fecha2.getMonth()+1)
// Obtener el año --> getFullYear()
console.log(fecha2.getFullYear())

// Mostrar una fecha en un string
// .toLocaleDateString()
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString

console.log(fecha2.toLocaleDateString('en-GB'))