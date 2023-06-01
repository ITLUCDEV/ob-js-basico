const boton = document.querySelector("#btn")

console.log(boton)

boton.addEventListener("click", () => {
    confirm("¿Estás de acuerdo?")
        ? console.log("OK")
        : console.log("NO")
})

const botonInfo = document.getElementById("info")

botonInfo.addEventListener("click", () => {
    const nombre = prompt("¿Cuál es tu nombre?")
    console.log("Tu nombre es", nombre)
})

const lista = [{
    nombre: "Luis",
    edad: 19
}, {
    nombre: "Gorka",
    edad: 34
}, {
    nombre: "Amaia",
    edad: 30
}]

// console.log(lista)
console.table(lista)