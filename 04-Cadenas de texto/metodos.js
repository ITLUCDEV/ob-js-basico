// Métodos más utilizados con strings

// length --> Obtiene la longitud de un string
let str = "Hola soy un string";
console.log(str.length);

// slice(), substring(), substr() --> Obtiene partes de un string
let slice_str = str.slice(0, 4);
console.log(slice_str);

let substring_str = str.substring(5, 8);
console.log(substring_str);

let substr_str = str.substr(5, 10); //Substr está OBSOLETO
console.log(substr_str);

// replace() --> Reemplaza parte del contenido de un string 
// replace() SÓLO reemplaza la primera instancia
let cadena = "Hola, mi nombre es Luis";
console.log(cadena);

console.log(cadena.replace("Luis", "lalvarezweb"));

// Al utilizar la expresión regular /g (global), reemplaza TODAS las instancias
let texto_largo = "Hola estoy probando a reemplazar partes de string mientras estoy estoy probando"
console.log(texto_largo.replace(/estoy/g, 'cinco'))

// toLowerCase() --> Transforma un string a minúsculas
let input = "Escorpio"
let db = "escorpio"

console.log(input.toLowerCase())
console.log(input.toLowerCase() === db.toLowerCase())

// toUpperCase() --> Transforma un string a mayúsculas
console.log(input.toUpperCase())
console.log(input.toUpperCase() === db.toUpperCase())

// concat(), +, `` --> Permite concatenar strings
let str_1 = "Hola soy la primera string."
let str_2 = "Hola soy la segunda string."

console.log(str_1.concat(" ", str_2)) // mejor práctica
console.log(str_1 + " " + str_2) // peor práctica
console.log(`${str_1} ${str_2}`)

// trim() --> Elimina espacios al principio y al final
// trimStart() --> Elimina los espacios del principio
// trimEnd() --> Elimina los espacios del final
let str_3 = "   Hola soy un string con espacios al principio y al final.   "
console.log(str_3.length)

console.log(str_3.trim().length)
console.log(str_3.trimEnd().length)
console.log(str_3.trimStart().length)

// charAt() --> Obtiene el caracter que hay en una posición
let str_4 = "Hola soy el cuarto string"

console.log(str_4.charAt(3))
console.log(str_4[3])

// indexOf() --> Obtiene una palabra dentro de una string
// lastIndexOf() --> Obtiene el último registro de una palabra dentro de una string
let str_5 = "Hola soy Luis y me amo el gym, soy Luis"
console.log(str_5.indexOf("Luis"))
console.log(str_5.charAt(9))
console.log(str_5.lastIndexOf("Luis"))

// Expresiones regulares
// --> https://regexr.com  <--

// match() --> Permite utilizar expresiones regulares para buscar registros de una string
let texto_largo_2 = "Hola estoy probando a reemplazar partes de string mientras estoy estoy probando"

console.log(texto_largo_2.match(/es/g))

// includes() --> Booleano que devuelve si existe esa palabra en el string
console.log(texto_largo_2.includes("probando"))

// startsWith() --> Devuelve si un string empieza por una palabra
console.log(texto_largo_2.startsWith("Hola"))

// endsWith() --> Devuelve si un string termina por una palabra
console.log(texto_largo_2.endsWith("probando"))