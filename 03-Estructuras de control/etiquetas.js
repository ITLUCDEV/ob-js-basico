// break y continue (no buenas prácticas, SOLO en casos EXTREMADAMENTE NECESARIOS)
// labels (líneas 7 y 8: bucleDecenas/bucleUnidades:)

let unidades = 0
let decenas = 0

bucleDecenas: while(true){ // muy peligroso, puede causar overflow porque el IDE lo tome como bucle infinito.
    bucleUnidades: while(true){
        console.log(`El número actual es: ${decenas}${unidades}`)
        unidades++
        if(unidades === 10){
            unidades = 0
            break bucleUnidades
        }
        if(decenas === 2){
            break bucleDecenas
        } // Con esto, al usar bien los labels accedemos dentro de un mismo bucle a un bucle externo
    }
    decenas++
}
console.log("Estamos fuera del bucle, ya hemos terminado")