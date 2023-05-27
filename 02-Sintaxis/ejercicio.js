/*
Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:
- Tu nombre (string)
- Tu edad (number)
- ¿Eres desarrollador? (boolean)
- Tu fecha de nacimiento (Date)
- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)
*/

const datos = {
    nombre: "Luis Álvarez",
    edad: 19,
    desarrollador: true,
    nacimiento: new Date("March 10 2004"),
    libro: {
        titulo: "El programador pragmático",
        autor: "David Thomas",
        fecha: new Date("May 5 2022"),
        url: "elprogramadorpragmatico.com"
    }
}

console.log(datos)
