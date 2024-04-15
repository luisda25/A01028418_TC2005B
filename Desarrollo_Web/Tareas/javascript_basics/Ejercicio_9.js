"use strict";

function cadenaCorta(lista) {
	let lmin = lista[0].length;

	for(let i = 1; i < lista.length; i++) {
	    if(lista[i].length < lmin) {
		lmin = lista[i].length;
	    }
	}
	return lmin;
}


console.log(cadenaCorta(['hola', 'Web', 'Base']));
console.log(cadenaCorta(['juego', 'js', 'tcg']));
console.log(cadenaCorta(['ola', 'mundo', 'hacker']));

