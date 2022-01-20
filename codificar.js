/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

function encriptarTexto(texto) { 
    var concatenar = "";
    var adicionarLetras = "";
    var caracter = "";
    var reglas = ["ai", "enter", "imes", "ober", "ufat"];

    for (var i = 0;i < texto.length; i++) {
        caracter = texto[i];

        if (caracter == "a") {
            adicionarLetras = reglas[0];
        }
        else if (caracter == "e") {
            adicionarLetras = reglas[1];
        }
        else if (caracter == "i") {
            adicionarLetras = reglas[2];
        }
        else if (caracter == "o") {
            adicionarLetras = reglas[3];
        }
        else if (caracter == "u") {
            adicionarLetras = reglas[4];
        }
        else {
            adicionarLetras = caracter;
        }

        concatenar = concatenar + adicionarLetras;     
    } 

    return concatenar; 
}