localStorage.setItem("nombre", "Luis")

console.log(localStorage.getItem("nombre"))

localStorage.setItem("persona", JSON.stringify({nombre: "gorka", edad: 32}))

console.log(JSON.parse(localStorage.getItem("persona")))

// JSON.stringify --> Convierte un objeto/array en string
// JSON.parse --> Convierte un objeto/array convertido con stringify en un objeto de JS

localStorage.removeItem("nombre")

sessionStorage.setItem("nombre-sesion", "Lucho")

// Cookies

document.cookie = "nombre-cookie=LuchoCookie"

// Dándole caducidad a una cookie
document.cookie = "NombreCaducidad=Nombre;expires=" + new Date(2023, 06, 01).toUTCString()
console.log(document.cookie)
