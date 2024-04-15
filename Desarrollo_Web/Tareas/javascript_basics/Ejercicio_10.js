"use strict";

function palindromo(cadena) {
	let cadenarev = cadena.split('').reverse().join('');
	return cadena === cadenarev;
}


console.log(palindromo('ojo'));
console.log(palindromo('radar'));
console.log(palindromo('coche'));

