/*
Ejercicio:
Crea un nuevo proyecto de Node
- Instala la dependencia ESLint (https://npmjs.com/package/eslint)
- Duplica el archivo del ejercicio de la sesión 04-Textos
- Utiliza los tres estilos de comillas de forma alterna (simples, dobles, backticks)
- Crea el fichero .eslintrc.json
- Cambia la configuración de ESLint para que la ecmaVersion sea latest.
- Cambia la configuración de ESLint para que muestre un error cuando comillas no sean dobles
- Crea un script en el package.json para corregir automaticamente todos los errores.
- Ejecuta el script a través del terminal
*/


let str_dbl = "Hola, soy un texto con comillas dobles."
console.log(str_dbl)

let str_sng = "Hola, soy un texto con comillas simples."
console.log(str_sng)

let str_comillas = "El otro día me dijo literalmente \"ve a sacar la basura\""
console.log(str_comillas)

let str_comillas_simples = "El otro día me dijo literalmente \"ve a sacar la basura\""
console.log(str_comillas_simples)

let str_comillas_dobles = "El otro día me dijo literalmente 've a sacar la basura'"
console.log(str_comillas_dobles)

let str_backticks = "Esto es un string con backticks"
console.log(str_backticks)