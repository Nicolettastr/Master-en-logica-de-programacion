/* 

Dado un array de enteros y un numero, detectar si esa lista de numeros es una permutacion del 1 al numero aportado
en este caso una permutacion es una secuencia de numeros en orden sin que falte ninguno entre ellos

ejemplo: 

permutacion([1, 2, 3, 4, 5], 5) es true
permutacion([1, 2, 3, 5], 5) es false

*/

const isPermutation = (arr, num) => {
    if (arr.length !== num) {
        return false;
    }

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] + 1 !== arr[i + 1]) {
            return false;
        }
    }

    return true;
};

//videos

const permutation = (arr, num) => {
    for (let i = 0; i < num; i++) {
        if (arr.indexOf(i + 1) < 0) {
            return false;
        }
    }

    return true;
};

console.log(permutation([1, 2, 3, 4, 6], 5));
