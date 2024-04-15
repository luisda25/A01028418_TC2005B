"use strict";

function hackerSpeak(cadena) {
	let dic = {'a':'4', 'e':'3', 'i':'1', 'o':'0', 's':'5'};
	let HS = '';

	for(let i = 0; i < cadena.length; i++) {
	    let car = cadena[i].toLowerCase();

	    if(dic.hasOwnProperty(car)) {
		HS += dic[car];
	    } else {
		HS += cadena[i];
	    }
	}
	return HS;
}


console.log(hackerSpeak('Javascript es divertido'));
console.log(hackerSpeak('Desarrollo Web'));
console.log(hackerSpeak('Videojuegos'));

