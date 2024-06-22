//Dado un string y un numero, repetir el string tantas veces como el numero indique

//funcion clasica
const repeatText = (word, num) => {
    let words = "";

    for (let i = 0; i < num; i++) {
        words += word;
    }

    return words;
};

console.log(repeatText("nicole", 4));

//funcion prototipo

String.prototype.repeatText = function (num) {
    let words = "";

    for (let i = 0; i < num; i++) {
        words += this;
    }

    return words;
};

console.log("hola".repeatText(8));
