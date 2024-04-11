"use strict";

function MayusLetra(cadena) {
    const palabras = cadena.split(" ");
    let result = "";

    for (let i = 0; i < palabras.length; i++) {
        const palabra = palabras[i];
        const letraMayus = palabra.charAt(0).toUpperCase();
        const restoPalabra = palabra.slice(1);
        const Palabracompleta = letraMayus + restoPalabra;
        result += Palabracompleta;

        if (i < palabras.length - 1) {
            result += " ";
        }
    }
    return result;
}


const texto1 = "hola mundo";
console.log(MayusLetra(texto1));
const texto2 = "esto es una prueba";
console.log(MayusLetra(texto2));
const texto3 = "desarrollo web";
console.log(MayusLetra(texto3));

