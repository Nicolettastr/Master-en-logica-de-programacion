/* 
//Dado un numero, devolve4r su factorial. El factorial de un numero es la multiplicacion de todos los numeros hasta llegar a el

ejemplo: factorial(3) respuesta: 6

*/

const factorial = (num) => {
    let result = 1;

    for (let i = 1; i <= num; i++) {
        result = result * i;
    }

    return result;
};

console.log(factorial(6));
