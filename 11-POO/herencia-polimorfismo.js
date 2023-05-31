// Herencia
class Persona {
    _nombre
    _edad
    constructor(nombre, edad){
        this._nombre = nombre
        this._edad = edad
    }

    saludo() {
        console.log(`Hola, mi nombre es ${this._nombre}, tengo ${this._edad} años`)
    }
}

class Desarrollador extends Persona{
    constructor(nombre, edad, lenguaje){
        super(nombre, edad) // nos permite utilizar el constructor de la clase padre
        this.lenguaje = lenguaje
    }

    // Polimorfismo
    saludo(){
        super.saludo()
        console.log(`Y soy desarollador de ${this.lenguaje}`)
    }
}

const nuevodev = new Desarrollador("Luis", 19, "Javascript")
console.log(nuevodev)
nuevodev.saludo()


