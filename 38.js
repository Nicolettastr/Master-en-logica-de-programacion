/* Dado un numero, mostar listado de los cuadrados de todos los numeros naturales hasta llegar al mismo */

const square = (num) => {
    return num * num;
};

const show = (num) => {
    for (let i = 0; i <= num; i++) {
        console.log(square(i));
    }
};

console.log(show(38));
