/*
Ejercicio:
Crea un archivo JS que contenga las siguientes líneas:

- String con tu nombre
- String con tu apellido
- String que se llame estudiante concatenando tu nombre y tu apellido con un espacio entre medias.
- String que se llame estudianteMayus que contenga la string estudiante pero en mayúsculas
- String que se llame estudianteMinus que contenga la string estudiante pero en minúsculas
- Variable que contenga el número de letras de la string estudiante contando los espacios
- Variable que contenga la primera letra del Nombre
- Variable que contenga la última letra del Apellido
- String que elimine los espacios de la variable estudiante
- Variable booleana que diga si el Nombre está contenido en la variable "estudiante"
*/

let nombre = "Luis"
console.log(nombre)

let apellido = "Álvarez"
console.log(apellido)

let estudiante = nombre.concat(" ", apellido)
console.log(estudiante)

let estudianteMayus = estudiante.toUpperCase()
console.log(estudianteMayus)

let estudianteMinus = estudiante.toLowerCase()
console.log(estudianteMinus)

let longitud = estudiante.length
console.log(longitud)

let primeraletra = estudiante.charAt(0)
console.log(primeraletra)

let ultimaletra = estudiante.charAt(11)
console.log(ultimaletra)

let sinespacios = estudiante.trim()
console.log(sinespacios)

let validacion_nombre = estudiante.includes("Luis")
console.log(validacion_nombre)