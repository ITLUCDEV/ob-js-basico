// Errores en Javascript
const miFuncion = val => {
    if(typeof val === "number"){
        return 2 * val
    } 
    throw new Error("El valor debe ser de tipo NÚMERO")
}

// const elDoble = miFuncion("ala")
// console.log(elDoble)

// Try catch --> Buena práctica
const numero = "8"

try {
    // Código que puede fallar
    console.log("Está ejecutándose de manera correcta")
    const doble = miFuncion(numero)
    console.log(doble)
} catch(e){
    // en caso de que falle, ejecuta esto
    console.error("ERROR!")
    console.error(e)
} finally {
    // esto se va a ejecutar siempre
    console.log("Se ejecuta siempre")
}

// [!] ==> Errores comunes <==
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Error
// InternalError --> Problemas internos como el stack overflow
// SyntaxError --> Errores relacionados con la sintaxis del código
// TypeError --> Enviar un tipo de valor cuando el código está esperando otro tipo
// RangeError --> Error al tratar de acceder a una posición que está sobrepasando
// ReferenceError --> No existe la referencia a la que nos estamos refiriendo