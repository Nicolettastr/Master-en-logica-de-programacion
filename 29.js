/* Ddo un numero indicar si es un numero capicua o no. Los numeros capicua se leen igual de izquierda a derecha y viceversa

ejemplo: 

capi(2002) true
capi(1965) false

*/

const isCapicua = (num) => {
    let result = false;

    let number = Number(num.toString().split("").reverse().join(""));

    if (num === number) {
        result = true;
    }

    return result;
};

console.log(isCapicua(2002));
