const logger = require('./logger')
// logger.log("Hola estoy saliendo por pantalla")
logger.info("Hola, esto es un mensaje informativo")
logger.debug("Hola, esto es mensaje de debug")
logger.warn("Hola, esto es un mensaje de advertencia")
logger.error("Hola, esto es un error")

function suma(a, b){
    if (typeof a === "number" && typeof b === "number"){
        return a + b
    } else {
        throw new Error("El valor no es un número")
    }
}

const a = 4
const b = "hola"

try {
    const sumar = suma(a, b)
    console.log(sumar)
} catch(e) {
    logger.error(e)
    logger.error("El valor introducido es incorrecto")
}