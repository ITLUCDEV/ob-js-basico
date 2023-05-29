// String (cadenas de caracteres)
// Cualquier tipo de string se puede definir con "" o '', siempre y cuando terminen con el mismo caracter.
let str_dbl = "Hola, soy un texto con comillas dobles."
console.log(str_dbl)

let str_sng = "Hola, soy un texto con comillas simples."
console.log(str_sng)

// Para el slash invertido -> Alt gr + º
let str_comillas = "El otro día me dijo literalmente \"ve a sacar la basura\""
console.log(str_comillas)

let str_comillas_simples = 'El otro día me dijo literalmente "ve a sacar la basura"'
console.log(str_comillas_simples)

let str_comillas_dobles = "El otro día me dijo literalmente 've a sacar la basura'"
console.log(str_comillas_dobles)

// [!] --> IMPORTANTE <--
// Comillas invertidas (backticks) [``] -> Nos permite introducir variables en el texto
// Permiten saltos de línea en la declaración del propio string
let str_backticks = `Esto es un string con backticks`
console.log(str_backticks)

let nombre = "Luis"
let saludo = `Hola ${nombre}, bienvenido`
console.log(saludo)

// Plantillas HTML
let plantilla = `
<html>
    <h1>Página web de ${nombre}</h1>
    <p>Este es un párrafo</p>
</html>
`
console.log(plantilla)

// Introducción de variables en HTMl
let libros = ["Empieza por el por qué", "El monje que vendió su ferrari", "El poder del ahora"]