const persona = {
    nombre: "Luis", 
    edad: 19,
    isDeveloper: true,
    saludo: function(){
        console.log("Hola")
    }
}

console.log(persona)
persona.saludo()

const otra_persona = {
    nombre: "Miguel",
    edad: 15,
    isDeveloper: false,
    saludo: function(){
        console.log("Hola")
    }
}

otra_persona.saludo()

const creaPersona = (nombre, edad, isDeveloper) => {
    return {
        nombre, // = nombre: nombre,
        edad,
        isDeveloper,
        saludo: function() {
            console.log("Hola")
        }
    }
}

const nuevaPersona = creaPersona("Juan", 32, true)
console.log(nuevaPersona)

const nuevaPersona_2 = creaPersona("Maria", 44, false)
console.log(nuevaPersona_2)

