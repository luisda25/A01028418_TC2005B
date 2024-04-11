"use strict";

function no_repeat(cadena) {
    const count = {};

    for (let char of cadena) {
        if (count[char]) {
            count[char]++;
        } else {
            count[char] = 1;
        }
    }

    for (let char of cadena) {
        if (count[char] === 1) {
            return char;
        }
    }

    return null;
}

const cadena1 = 'abacddbec';
console.log(no_repeat(cadena1));
const cadena2 = 'aonfourhv';
console.log(no_repeat(cadena2));
const cadena3 = 'fjeiofahejñaf';
console.log(no_repeat(cadena3));
