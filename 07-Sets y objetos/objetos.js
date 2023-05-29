// Objetos
const obj = {
    id: 1,
    nombre: "Luis",
    apellido: "Álvarez",
    isDeveloper: true,
    libros_fav: ["El hombre en busca de sentido", "Hábitos atómicos"]
}

console.log(obj.nombre)

// Acceder a propiedades a través de variables
const prop = "isDeveloper"
console.log(obj[prop])

// Replicar objetos
const obj2 = [obj]; // En caso de declararlo sin [], asigna la misma referencia de memoria, por lo que se modificarán ambos objetos
console.log(obj2)

obj2.nombre = "Juan"
console.log(obj2.nombre)
console.log(obj.nombre)

// Duplicar un objeto
const obj3 = {...obj}
console.log(obj3.nombre)

obj3.nombre = "Gorka"
console.log(obj.nombre)
console.log(obj3.nombre)

// Ordenar listas de objetos en función de una propiedad
const listaPeliculas = [
    {titulo: "El guardian nocturno", anyo: "2022"},
    {titulo: "Titanic", anyo:"1997"},
    {titulo: "Moana", anyo:"2016"},
    {titulo: "El efecto mariposa", anyo:"2004"},
    {titulo: "TED", anyo:"2012"}
]

console.log(listaPeliculas)
// .sort()
listaPeliculas.sort((a, b) => a.anyo - b.anyo) // [!][!][!]
console.log(listaPeliculas)
