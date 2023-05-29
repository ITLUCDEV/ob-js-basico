/*
Ejercicio:
Crea un archivo JS que contenga las siguientes líneas:

- Variable que contenga tu altura en centimetros (entero)
- Variable que contenga tu altura en metros (flotante)
- Variable que contenga tu peso en kilogramos (flotante)
- Variable que contenga tu altura en metros redondeada hacia arriba
- Variable que contenga tu peso en kilogramos redondeado hacia abajo
- Una variable que contenga si "el máximo valor que se puede obtener en JS + 1" es igual al máximo valor
    que se puede obtener en JS.
*/

let altura_cm = 195
let altura_m = 1.95
let peso_kg = 91.8

let altura_redondeada = Math.round(altura_m)
console.log(altura_redondeada)

let peso_redondeado = peso_kg.toFixed()
console.log(peso_redondeado)

let max_value_check = Number.MAX_VALUE + 1 === Number.MAX_VALUE
console.log(max_value_check)