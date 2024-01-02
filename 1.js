//Dado un numero, devolver su tabla de multiplicar completa

const multiplicationTable = num => {
    const nums = 10

    for (let i = 1; i <= nums; i++) {
        let mult = i * num
        console.log(`${i} * ${num} = ${mult}`)
    }

    return
}

console.log(multiplicationTable(5))
