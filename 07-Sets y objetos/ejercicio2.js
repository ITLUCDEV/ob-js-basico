/* 
Ejercicio
Crea un archivo llamado objetos.js que contenga las siguientes líneas
- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
- Una variable que obtenga tu edad a partir del objeto anterior
- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de dos amigos
- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
*/

const datos = {
    nombre: "Luis",
    apellido: "Álvarez",
    edad: 19,
    altura: 195,
    esDesarrollador: true 
}
console.log(datos.edad)

const listadatos = [
    {...datos},
    {nombre: "Miguel", apellido: "Hernandez", edad: 18, altura: 187, esDesarollador: false}
]
console.log(listadatos)

const listadatos_ordenados = listadatos.sort((a, b) => b.edad - a.edad)
console.log(listadatos_ordenados)