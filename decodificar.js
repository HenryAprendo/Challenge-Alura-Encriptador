//var texto = "lai bimesblimesai enters enterl menterjoberr limesbrober denterl mufatndober "; 
// var salida = desencriptarTexto(texto);
// console.log(salida);
var contador = 0;

function desencriptarTexto(texto) {
    var concatenar = "";
    var adicionarLetras = "";
   
    for (var i = 0;i < texto.length; i++) {
        var caracter = texto[i];

        if (contador == 0) { 
            if (caracter == "a") {
                adicionarLetras = caracter;
                omitirTexto(caracter);
            }
            else if (caracter == "e") {
                adicionarLetras = caracter;
                omitirTexto(caracter);
            }
            else if (caracter == "i") {
                adicionarLetras = caracter;
                omitirTexto(caracter);
            }
            else if (caracter == "o") {
                adicionarLetras = caracter;
                omitirTexto(caracter);
            }
            else if (caracter == "u") {
                adicionarLetras = caracter;
                omitirTexto(caracter);
            }
            else {
                adicionarLetras = caracter;
            }
                
            concatenar = concatenar + adicionarLetras;
        }
        else {
            contador = contador - 1;
        }
            
    }
    return concatenar;
}

//Omite las convenciones ["ai", "enter", "imes", "ober", "ufat"];

function omitirTexto(caracter) {
    if (caracter == "a") {
        contador = 1;
    }    
    else if (caracter == "e") {
        contador = 4;
    } 
    else {
        contador = 3;
    } 
}