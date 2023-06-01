// $(selector).accion()
// ej: $("h1").hide()

$(document).ready(() => {
    // cuando enclaustramos nuestro código dentro del document ready, significa que se ejecutará
    // cuando la página termine de cargar.
})

// Forma simplificada del document ready

/* 
$(() =>  {

})
*/

$(() => {
    // Selectores:
    // id="el-1" ==> "#el-1"
    // class="el-1" ==> ".el-1"

    $(".btn-hide").click(() => {
        // $("h1").hide()
        $("h1").fadeOut()
    })

    $(".btn-show").click(() => {
        // $("h1").show()
        $("h1").fadeIn()
    })

    $("li").click(() => {
        $("h1").css({color: "red"})
    })

    $(".new-element").click(() => {
        // $("ul").append("<li>New element</li>")
        $("ul").prepend("<li>New element</li>")
    })

    $("li").mouseenter((elem) => {
        elem.target.style.color = "blue"
    })

    $("li").mouseleave((elem) => {
        elem.target.style.color = "black"
    })
})