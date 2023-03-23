$(document).ready(function(e) {
$('header button').click(function(){
    $('form').slidedown();
    })

$('header button').click(function(){
    $('botao-cancelar').slideup();
    })

    $('form').on('submit', function(e) {
        console.log("submit");
        e.preventDefault();
    })
})
