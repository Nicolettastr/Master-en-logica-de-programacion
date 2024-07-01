//Dado un numero devolver cuantos bucles tiene

const hasLoop = (numbers) => {
    const numbersArray = numbers.toString().split("");
    let result = 0;

    const loopNumbers = [0, 6, 8, 9];

    for (let i = 0; i < numbersArray.length; i++) {
        const currentNumber = parseInt(numbersArray[i]);
        if (loopNumbers.includes(currentNumber) && currentNumber === 8) {
            result = result + 2;
        } else if (loopNumbers.includes(currentNumber) && currentNumber !== 8) {
            result = result + 1;
        }
    }

    return result;
};

console.log(hasLoop(28861));
