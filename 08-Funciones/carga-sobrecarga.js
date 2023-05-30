// Carga y sobrecarga de funciones
function saludar() {
    hola()
}

function hola() {
    console.log("Hola! Soy la función hola()")
}

saludar()

// Cómo funciona la carga / sobrecarga de funciones
// Intérprete realiza lo siguiente.
//  1. global()
//  2. saludar () global()
//  3. hola() saludar() global ()
//  4. saludar() global()
//  5. global()

// Funciones recursivas

// function recursiva() {
//     recursiva() // sobrecarga (overflow)
// }

// recursiva()

