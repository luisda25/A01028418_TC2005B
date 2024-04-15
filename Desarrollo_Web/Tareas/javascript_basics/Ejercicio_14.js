"use strict";

function potenciaDos(n) {
	if(n === 0) {
	    return false;
	}

	while (n !== 1) {
	    if(n % 2 !== 0) {
		return false;
	    }

	    n = n / 2;
	}
	return true;
}


console.log(potenciaDos(16));
console.log(potenciaDos(5));
console.log(potenciaDos(64));


