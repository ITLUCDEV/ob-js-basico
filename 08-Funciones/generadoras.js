// Funciones generadoras
// Sintaxis: function* nombre(){}
// Generador de ID's incremental (id = 0, id = 1, id = 2....)

function* generaID(){
    let id = 0
    while(true){
        id++
        if(id === 10){
            return id
        }
        yield id // cada vez que llamemos a esta función nos enviará un resultado
    }
}
// Para llamarla vamos a guardar la función generadora en una constante
const gen = generaID()

// Esto nos genera un objeto, por lo que podemos obtener su valor
console.log(gen.next().value)
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next().done)

