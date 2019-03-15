/* Saludos */
function Saludar(){
        return swal("Hola!", "Tu taller práctico te saluda!", "success");
    }

function Accion(){
    return swal("Vaya...", "Parece que has hecho click!", "warning");
}

/* Comprobación index */
document.addEventListener('DOMContentLoaded', function(e){

    if ( document.URL.indexOf('contacto')  > 0 )
        return;
    /* Para url final
    if ( window.location != 'http://miweb.com/index.php')
        return;
    */

   /* Selectores */
    var enlaceEntradas = document.getElementsByClassName('enlaceEntrada');
    var parrafos = document.getElementsByClassName('parrafoPrincipal');
    
    /* Enlaces de leer mas */
    var enlaces = [] ;

    for(var enlaceEntrada of enlaceEntradas)
        enlaces.push(enlaceEntrada);

    var contador = 0;
    
    for(var parrafo of parrafos){

        var texto = parrafo.innerText;
        var largo = texto.length;

        /* texto limitado */
        if (largo > 400){
            var textoCorto = texto.substr(0,400);
            parrafo.innerHTML = textoCorto + '...' + `<a href="${ enlaces[contador] }" style=' display: block; width: 100%; text-align:center;' id='leerMas'>Leer mas...</a>`;
            contador++;
        };
    };
        


});