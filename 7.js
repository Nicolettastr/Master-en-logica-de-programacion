// Dados 2 numeros, devolver cuantos numeros impares hay entre ellos

const oddNum = (num1, num2) => {
    const oddNums = []

    for (let i = num1; i < num2; i++) {
        if (i % 2 !== 0) {
            oddNums.push(i)
        }
    }

    return oddNums.length
}

console.log(oddNum(1, 10030))
