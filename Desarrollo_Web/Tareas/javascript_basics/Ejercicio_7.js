"use strict";

function factoriza(n) {
	let factores = [];

	for(let i = 1; i <= n; i++) {
	    if(n % i === 0) {
		factores.push(i);
	    }
	}
	return factores;
}


console.log(factoriza(12));
console.log(factoriza(36));
console.log(factoriza(48));
