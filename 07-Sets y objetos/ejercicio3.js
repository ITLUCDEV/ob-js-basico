/*
Ejercicio:
Crea un archivo llamado fechas.js que contenga las siguientes líneas
- La fecha de hoy
- La fecha de tu nacimiento
- Una variable que indique si hoy es más tarde (>) que tu fecha de nacimiento
- Una variable que contenga el día de tu nacimiento
- Una variable que contenga el mes de tu nacimiento
- Una variable que contenga el año de tu nacimiento
*/

const fecha1 = new Date()
console.log(fecha1)

const fecha2 = new Date(2004, 02, 10)
console.log(fecha2)

const validacion_fecha = fecha1 > fecha2
console.log(validacion_fecha)

const dia_nacimiento = fecha2.getDate()
console.log(dia_nacimiento)

const mes_nacimiento = fecha2.getMonth()+1
console.log(mes_nacimiento)

const anyo_nacimiento = fecha2.getFullYear()
console.log(anyo_nacimiento)
