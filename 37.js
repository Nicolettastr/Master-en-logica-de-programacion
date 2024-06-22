/* 
Dado un array o un texto devolver el elemento o palabras que mas aparecen

ejemplo:

appearsTheMost("VICTOR ROBLES VICTOR") VICTOR
appearsTheMost([1,2,3,4,1]) 1

*/

const appearsTheMost = (elements) => {
    let result = {};

    if (typeof elements === "string") {
        elements = elements.split(" ");
    }

    for (let element of elements) {
        if (!result[element]) {
            result[element] = 1;
        } else {
            result[element]++;
        }
    }

    let maxValue = -Infinity;
    let mostUsed = null;

    for (let element in result) {
        if (result.hasOwnProperty(element)) {
            const valor = result[element];
            if (valor > maxValue) {
                maxValue = valor;
                mostUsed = element;
            }
        }
    }

    return mostUsed;
};

/* Video */

const theMostUsed = (data) => {
    let object = {};
    let mostUsed = "";
    let valueMostUsed = 0;

    if (typeof data === "string") {
        data = data.split(" ");
    }

    for (let item of data) {
        if (!object[item]) {
            object[item] = 1;
        } else {
            object[item]++;
        }
    }

    for (let element in object) {
        if (object[element] > valueMostUsed) {
            valueMostUsed = object[element];
            mostUsed = element;
        }
    }

    return mostUsed;
};

console.log(theMostUsed([1, 2, 3, 4, 1]));
console.log(theMostUsed("VICTOR ROBLES VICTOR paco paco paco paco"));
