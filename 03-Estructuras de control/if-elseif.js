// Estructura anidadada de if / else if

let nota = 5;

if (nota === 5){
    console.log("Enhorabuena, has obtenido un sobresaliente.")
} else if (nota === 4){
    console.log("Buen trabajo, podrías haberlo hecho mejor.")
} else if (nota === 3){
    console.log("Has obtenido un suficiente.")
} else if (nota === 2){
    console.log("No has aprobado por poco.")
} else if (nota === 1){
    console.log("No has estudiado nada, trabaja más.")
} else {
    console.log("Error: Introduce una nota entre el 1 y el 5.")
}