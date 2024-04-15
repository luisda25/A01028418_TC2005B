"use strict";

function mcd(a, b) {
	while (b != 0) {
	    let t = b;
	    b = a % b;
	    a = t;
	}
	return a;
}

console.log(mcd(48,18));
console.log(mcd(16,20));
console.log(mcd(450,360));
