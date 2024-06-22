//Dado un numero, mostrar los numeros del 1 hasta el numero. pero en los multiplos de 3 imprimir buzz, y los multiplos de 5 lightyear. para los multiplos de 3 y 5 imprimir buzzlightyear

const buzzlightyear = (num) => {
    let result = "";

    if (num % 3 === 0 && num % 5 === 0) {
        result = "buzzlightyear";
    } else if (num % 5 === 0) {
        result = "lightyear";
    } else if (num % 3 === 0) {
        result = "buzz";
    } else {
        return num;
    }

    return result;
};

console.log(buzzlightyear(5));
