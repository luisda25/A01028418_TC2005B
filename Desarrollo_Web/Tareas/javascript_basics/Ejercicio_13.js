"use strict";

function cadenaFrecuente(lista) {
	let frec = {};
	let maxFrec = 0;
	let cadenaFrec;

	for(let i of lista) {
	    if(frec[i] === undefined) {
	    	frec[i] = 1;
	    } else {
		frec[i]++;
	    }

	    if(frec[i] > maxFrec) {
		maxFrec = frec[i];
		cadenaFrec = i;
	    }
	}
	return cadenaFrec;
}


console.log(cadenaFrecuente(['ojo', 'algo', 'yipee', 'ojo']));
console.log(cadenaFrecuente(['cabello', 'cabello', 'uñas', 'pestaña']));
console.log(cadenaFrecuente(['blanco', 'azul', 'azul', 'verde']));
