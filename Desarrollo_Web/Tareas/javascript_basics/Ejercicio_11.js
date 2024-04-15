"use strict";

function ordenAlfabetico(lista) {
	let listaOrdenada = lista.slice();
	listaOrdenada.sort();
	return listaOrdenada;
}


console.log(ordenAlfabetico(['animal', 'coche', 'birria', 'pescado']));
console.log(ordenAlfabetico(['estuche', 'mapache', 'zebra', 'control']));
console.log(ordenAlfabetico(['incendio', 'trazo', 'lienzo', 'papel']));

