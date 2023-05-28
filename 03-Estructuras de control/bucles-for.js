// Bucles
// For
// Se declara como: inicialización ; condición; actualización
for (let i = 0; i < 10; i += 2){
    // Aquí está el bucle
    console.log(i)
}

let lista = [1, 4, 6, 2, 3, 7, 10, 21]

for(let i = 0; i < lista.length; i++){
    console.log(lista[i])
}

// Estructura for..of
for (let valor of lista){ // mismo resultado, declara valor en cada uno de los elementos del array
    console.log(valor)
}

// Estructura for each
lista.forEach(valor => {
    console.log(valor)
});

// Estructura for in
let persona = {
    nombre: "Luis",
    apellido: "Álvarez",
    edad: 19,
    isDeveloper: true,
}

for(let propiedad in persona){
    console.log(propiedad)
    console.log(persona)
    console.log(persona[propiedad]) // Con esto, accedemos al VALOR de la PROPIEDAD
}