/*
Ejercicio:
Crea un archivo JS que contenga las siguientes líneas.
- Una función sin parámetros que devuelva siempre true.
- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos
después de haberse ejecutado.
- Una función generadora de índices pares automáticos
*/

// Función sin parámetros que devuelva siempre true

function verdadero() {
    return true;
}

console.log(verdadero());

// Función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos
// después de haberse ejecutado

async function llamarPromesa() {
    return new Promise((resolve, reject) => {
    resolve(
        setTimeout(() => {
        console.log("Hola, soy una promesa");
    }, 5000)
    );
});
}

// llamarPromesa()

// Una función generadora de índices pares automáticos

function* generarID() {
    let id = 0;
    while (true) {
    yield (id += 2);
}
}

const gen = generarID();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
