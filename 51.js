//Dado un array de numeros, devolver un array nuevocon los numeros pares e impares separados

const getArraysOddAndEven = (array) => {
    const evenNumbers = [];
    const oddNumbers = [];

    for (let number of array) {
        if (number % 2 === 0) {
            evenNumbers.push(number);
        } else {
            oddNumbers.push(number);
        }
    }

    return {
        even: evenNumbers,
        odd: oddNumbers,
    };
};

console.log(getArraysOddAndEven([1, 2, 3, 4]));
