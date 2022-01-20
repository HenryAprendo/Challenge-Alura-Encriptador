/*var botonCopiar = document.querySelector("#btn-copy");

botonCopiar.addEventListener("click", function(){
    var texto = document.querySelector("#msg");
    texto.focus();
    texto.select(); 
    document.execCommand("copy");
    
});*/

var botonCopiar = document.querySelector("#btn-copy");
botonCopiar.addEventListener("click", copiarTexto);

function copiarTexto() {
    var textoOutput = document.querySelector("#msg");
    textoOutput.focus();
    textoOutput.select();
    document.execCommand("copy");
}