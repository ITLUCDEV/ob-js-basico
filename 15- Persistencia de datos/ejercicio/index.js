/*
Ejercicio:
- Crea un nuevo fichero index.html
- Crea un fichero index.js
- Integra el index.js en el index.html
- En el index.js:
    - Crea una variable con tu nombre
    - Crea una variable con tu apellido
    - Crea un objeto con tu nombre y tu apellido
    - Almacena el objeto anterior en la SessionStorage
    - Almacena el objeto anterior en la LocalStorage
    - Crea una cookie que caduque en 2 minutos con los datos del objeto anterior
    - Observa como se almacenan los datos en la SessionStorage, LocalStorage y las cookies
    - Cierra el navegador, comenta las líneas que almacenan SessionStorage, LocalStorage y Cookies y vuelve a abrirlo
    - Observa cómo la SessionStorage está vacía
    - Observa cómo la LocalStorage sigue manteniendo el objeto que has almacenado
    - Observa cómo la cookie sigue manteniendo el objeto que has almacenado antes aunque haya expirado
*/

const nombre = "Luis"
const apellido = "Álvarez"

const nombre_apellido = {
    nombre: nombre,
    apellido: apellido
}

// sessionStorage.setItem("nombre-apellido", JSON.stringify(nombre_apellido))
// localStorage.setItem("nombre-apellido", JSON.stringify(nombre_apellido))

// document.cookie = "cookieCaducada=cookie;expires=" + new Date(2023, 06, 01, 23, 05, 00).toUTCString()

// console.log(nombre_apellido)