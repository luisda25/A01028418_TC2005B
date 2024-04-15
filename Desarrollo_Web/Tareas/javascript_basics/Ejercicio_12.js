"use strict";

function medianaModa(lista) {
	lista.sort((a, b) => a - b);
	let mediana;

	if(lista.length % 2 === 0) {
	    mediana = (lista[lista.length / 2 - 1] + lista[lista.length / 2]) / 2;
	} else {
	    mediana = lista[Math.floor(lista.length / 2)];
	}


	let frec = {};
	let maxFrec = 0;
	let moda;

	for(let i of lista) {
	    if(frec[i] === undefined) {
		frec[i] = 1;
	    } else {
		frec[i]++;
	    }

	    if(frec[i] > maxFrec) {
		maxFrec = frec[i];
		moda = i;
	    }
	}
	return {mediana: mediana, moda: moda};
}


console.log(medianaModa([1,1,2,5,8,7,9]));
console.log(medianaModa([5,5,6,8,8,9,9,9,1]));
console.log(medianaModa([3,3,7,7,7,8,9]));




