// Instalamos axio para hacer llamadas a servicios externos
import axios from "axios"

axios.get('https://pokeapi.co/api/v2/pokemon/luis')
    .then(function (response) {
        // handle success
        console.log(response.data);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });

// Librerías recomendadas: (https://hackr.io/blog/top-javascript-libraries)