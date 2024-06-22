//Dados dos numeros, sacar un numero aleatorio entre ellos

const randomNumber = (num1, num2) => {
    let highestNumber = 0;
    let lowestNumber = 0;

    if (num1 > num2) {
        highestNumber = num1;
        lowestNumber = num2;
    } else {
        highestNumber = num2;
        lowestNumber = num1;
    }

    const number = Math.floor(
        Math.random() * (highestNumber - lowestNumber) + lowestNumber
    );

    return number;
};

console.log(randomNumber(1, 100));
