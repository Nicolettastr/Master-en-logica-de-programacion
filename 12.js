// Dado un numero mostrar todos los numeros desde ese al 0 de 8 en 8 en una lista con guiones donde cada numero debe empezar por nº

const numberList = (num) => {

    let result = `Del ${num} al 0`

    while (num > 0){
        result += `\n nº${num}`
        num -= 8
    }

    return result
}

console.log(numberList(50))
