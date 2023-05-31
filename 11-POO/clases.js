// Creación y uso de clases

class Persona {
    // Private --> # --> Esto hace que sean atributos privados, que solo se pueda entrar desde la clase
    #nombre
    #edad

    // Protected --> _ --> Solo se puede acceder desde dentro de la clase y desde clases descendientes
    _isDeveloper = true
    
    // Atributos
    constructor(nombre, edad){
        this.#nombre = nombre; // this. --> hace referencia al objeto en el que está ahora mismo
        this.#edad = edad;
    }
    // Métodos
    saludo(){
        console.log(`Hola, mi nombre es ${this.#nombre}, tengo ${this.#edad} años.`)
    }

    obtenNombre(){
        return this.#nombre
    }

    #obtenEdad(){
        return this.#edad
    }
}

const nuevaPersona = new Persona("Luis", 19, true)
console.log(nuevaPersona)
console.log(nuevaPersona.obtenNombre())

// Instanciación: Forma de iniciar una clase
let numero = 60 // Aquí estoy inicializando una variable
let persona2 = new Persona("María", 34, false) // Aquí estoy INSTANCIANDO una clase / objeto

// Operador instanceof --> similar a typeof pero para clases
console.log(persona2 instanceof Persona)
console.log(persona2.nombre)
persona2.saludo()

console.log(persona2.obtenNombre())
console.log()
