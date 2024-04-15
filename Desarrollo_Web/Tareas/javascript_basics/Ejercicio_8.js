"use strict";

function quitaDuplicados(arreglo) {
	let unicos = [...new Set(arreglo)];
	return unicos;
}


console.log(quitaDuplicados([1,1,2,0,0,3,4,4]));
console.log(quitaDuplicados([4,4,5,6,6,7]));
console.log(quitaDuplicados([7,7,7,8,0,0,0,1]));
