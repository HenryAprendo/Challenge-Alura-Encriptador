var botonEncriptar = obtenerElementoHtml("#btn-encriptar");

botonEncriptar.addEventListener("click", function(event){
    event.preventDefault();

    var formulario = obtenerElementoHtml("#form-main");
    
    var inputTexto = obtenerElementoHtml("#input-texto");
    var textoEncriptado = encriptarTexto(inputTexto.value);    

    var mostrarTexto = obtenerElementoHtml("#msg");
    mostrarTexto.value = textoEncriptado;

    formulario.reset();    
});


var botonDesencriptar = obtenerElementoHtml("#btn-desencriptar");

botonDesencriptar.addEventListener("click", function(event){
    event.preventDefault();    
    var formulario = obtenerElementoHtml("#form-main");
    
    var inputTexto = obtenerElementoHtml("#input-texto");
    var textoOriginal = desencriptarTexto(inputTexto.value);  

    var mostrarTexto = obtenerElementoHtml("#msg");
    mostrarTexto.value = textoOriginal;

    formulario.reset(); 
});

function obtenerElementoHtml(selector) {
    const elementoHtml = document.querySelector(selector);
    return elementoHtml;

}