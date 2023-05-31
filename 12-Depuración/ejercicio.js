/*
Ejercicio:
Crea un nuevo fichero JS que contenga las siguientes líneas.
- Una función que admita un parámetro "num", y devuelva una lista con esa cantidad de
    números en la secuencia de Fiboannaci (ej) == num 6 === Resultado [1, 1, 2, 3, 5, 8]
- Ejecuta la depuración de VSCode para visualizar la ejecución de la función
 */

/*
Fibonnaci --> Definición recurrente
Los números de Fibonacci quedan definidos por las ecuaciones:
f0 = 0
f1 = 1
fn = f(n-1)+ f(n-2)
*/


Fibonnaci(6)
function Fibonnaci(num){
    var fib = [1, 0, 1]
    for(i = 2; i <= num + 1; i++){
        fib[i] = fib[i - 2] + fib[i - 1]
        console.log(fib[i])
    }
}

