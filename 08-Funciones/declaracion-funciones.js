// Funciones
// function nombre(params){}
const nom = "Luis"

// saludar("Luis")
saludar(nom)
function saludar(nombre){
    console.log(`Hola, ${nombre}`)
}

// Modificar una variable
let nombre_2 = "Juan"
despedir(nombre_2)
function despedir(nombre) {
    nombre = "Diego"
    console.log(`Adios, ${nombre}`)
}

// Modificar un objeto
let persona = {nombre: "Juan", apellido: "Gonzalez"}

saludarPersona(persona)

function saludarPersona(objeto){
    objeto.apellido = "Villar" // Al ser un objetivo, nos MODIFICA el objeto ORIGINAL
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`)
}

console.log(persona)

// Asignar un valor por defecto

function imprimeNumero(numero = 7){ // Parámetros por defecto
    console.log(numero)
}

imprimeNumero()

// Utilizando factor de propagación como parámetros

function imprimir(...parametros){
    console.log(parametros)
}

imprimir(1, 3, 9, 2, "hola", persona)

// Sumando parametros

function suma(...nums){
    return nums.reduce((a, b) => a + b)
    
}

const s = suma(1, 2, 3, 4, 9)
console.log(s)

// Multiplicando parametros

function multiplicar(a = 0, b = 0){
    return a * b
}

console.log(multiplicar(4,9))