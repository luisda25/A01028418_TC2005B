"use strict";

function invertirArreglo(arr) {
	const arr1 = [];

	for (let i = arr.length - 1; i >= 0; i--) {
	    arr1.push(arr[i]);
	}

     	return arr1;
}

function invertirArregloPos(arr) {
	let start = 0;
	let end = arr.length - 1;

	while (start < end) {
	    const temporal = arr[start];
	    arr[start] = arr[end];
	    arr[end] = temporal;
	    start++;
	    end--;
	}
}




const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];
const arr3 = [11, 12, 13, 14, 15];
console.log(invertirArreglo(arr1));
console.log(invertirArreglo(arr2));
console.log(invertirArreglo(arr3));

const arr4 = [16, 17, 18, 19, 20];
const arr5 = [21, 22, 23, 24, 25];
const arr6 = [26, 27, 28, 29, 30];
invertirArregloPos(arr4);
console.log(arr4);
invertirArregloPos(arr5);
console.log(arr5);
invertirArregloPos(arr6);
console.log(arr6);



