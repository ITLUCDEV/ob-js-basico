/*
Ejercicio:
Crea un archivo llamado conjuntos.js que contenga las siguientes líneas
- Un nuevo Set con los nombres de tu familia
- Modifica el Set original añadiendo tu nombre (duplicado) (deberia darte lo mismo)
- Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;))
*/

const familia = ["Juan", "Maria", "Pedro", "Luis"]
const fam_set = new Set(familia)

console.log(fam_set)

fam_set.add("Luis")
console.log(fam_set)

fam_set.add("Javascript")
console.log(fam_set)