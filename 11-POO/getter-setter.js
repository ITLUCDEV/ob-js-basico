class Persona {
    #nombre
    #edad

    constructor(nombre, edad){
        this.#nombre = nombre;
        this.#edad = edad;
    }

    // Getter
    obtenNombre(){
        return this.#nombre
    }

    obtenEdad(){
        return this.#edad
    }

    // Setter
    setNombre(nuevo_nombre){
        this.#nombre = nuevo_nombre
    }

    setEdad(nueva_edad){
        this.#edad = nueva_edad
    }
}
const persona1 = new Persona("Luis", 19)

// Getter --> Métodos que nos permiten obtener atributos/métodos privados o protegidos

console.log(persona1.obtenNombre())
console.log(persona1.obtenEdad())

// Setter --> Métodos que nos permiten cambiar el valor de alguno de los atributos privados o protegidos

persona1.setEdad(34)
console.log(persona1.obtenEdad())


persona1.setNombre("Luis")
console.log(persona1.obtenNombre())