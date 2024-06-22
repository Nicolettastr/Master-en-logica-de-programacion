/* Dado un array de numeros, devolver el array con sus numeros elevados al cuadrado 
el array debe eliminar cualquier contenido que no sea numerico
*/

const toSquare = (arr) => {
    let result = [];

    arr = arr.filter((element) => {
        return typeof element === "number";
    });

    for (let element of arr) {
        result.push(element * element);
    }

    return result;
};

console.log(toSquare([5, 6, 7, "square", false]));

/* video */

const toSquareVide = (num) => {
    let numberSquare = num
        .filter((number) => typeof number === "number")
        .map((item) => Math.pow(item, 2));

    return numberSquare;
};

console.log(toSquareVide([5, 6, 7, "square", false]));

//Math.pow devuelve la base elevada al exponente
