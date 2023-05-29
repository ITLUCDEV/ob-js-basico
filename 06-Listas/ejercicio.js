/*
Ejercicio:
Crea un archivo JS que contenga las siguientes lineas:

- Array que contenga la lista de la compra (min.5  elementos)
- Modifica la lista de la compra y añádele "Aceite de girasol"
- Array de 3 películas favrotias (objetos con propiedades: titulo, genero, fecha)
- Nuevo array que contenga las películas posteriores al 1 de enero de 2010 (filter)
- Nuevo array que contenga los géneros del array peliculas (map)
- Nuevo array que contenga la lista de géneros con la de títulos (concat)
- Nuevo array que concatene lista de géneros y lista de títulos (factor de propagación)
*/

const lista_compra = ["Pollo", "Arroz", "Setas", "Pasta", "Pan"]
console.log(lista_compra)

lista_compra.push("Aceite de girasol")
console.log(lista_compra)

const peliculas = [
    {titulo: "Agente Nocturno", genero: "Accion", fecha: new Date(2022, 01, 30)},
    {titulo: "La Casa de Papel", genero: "Popular", fecha: new Date(2018,05,03)},
    {titulo: "Los hombres de Paco", genero: "Policial", fecha: new Date(2009,03,07)}
]

const peliculas_nuevas = peliculas.filter(peli => peli.fecha > new Date(2009,03,07))
console.log(peliculas_nuevas)

const peliculas_generos = peliculas.map(val => val.genero)
console.log(peliculas_generos)

const peliculas_titulos = peliculas.map(val => val.titulo)
console.log(peliculas_titulos)

const generos_titulos_concat = peliculas_generos.concat(peliculas_titulos)
console.log(generos_titulos_concat)

const generos_titulos_prop = [...peliculas_generos, ...peliculas_titulos]
console.log(generos_titulos_prop)