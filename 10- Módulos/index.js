// Módulo
// Parte de código que se puede reutilizar en nuestro desarollo
// NPM = Node package management
// Formas de importar/exportar módulos
// 1. CommonJS - require
// 2. Import ES6 - import

const { factorial, suma } = require("./modulos/operaciones.js")

const fact = factorial(10)
console.log(fact)

const sum = suma(12, 90)
console.log(sum)

