"use strict";

function ordenDescendente(lista) {
	let listaOrd = lista.slice();
	listaOrd.sort((a, b) => b - a);
	return listaOrd;
}


console.log(ordenDescendente([5,6,4,7,2]));
console.log(ordenDescendente([6,5,2,6,4,6]));
console.log(ordenDescendente([9,7,5,8,6,0]));
