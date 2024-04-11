"use strict";

function bubbleSort(lista) {
    const n = lista.length;
    let flag;

    do {
        flag = false;
        for (let i = 0; i < n - 1; i++) {
            if (lista[i] > lista[i + 1]) {
                [lista[i], lista[i + 1]] = [lista[i + 1], lista[i]];
                flag = true;
            }
        }
    } while (flag);

    return lista;
}

const lista1 = [5, 3, 8, 1, 2];
console.log(bubbleSort(lista1));
const lista2 = [10, 9, 11, 15, 8, 2];
console.log(bubbleSort(lista2));
const lista3 = [9, 5, 3, 1, 4, 10];
console.log(bubbleSort(lista3));
