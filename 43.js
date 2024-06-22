//Dado un array de numeros, sacar la media entre ellos

const average = (arr) => {
    let sum = arr.reduce((accumulativeValue, currentValue) => {
        return accumulativeValue + currentValue;
    });

    let average = sum / arr.length;

    return average;
};

console.log(average([1, 2, 3, 4, 5, 6]));
