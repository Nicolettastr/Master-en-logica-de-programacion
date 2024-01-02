//Dado un numero entero, inviertelo y devuelve de nuevo el numero entero

const integer = num => {
    const total = parseInt(num.toString().split("").reverse().join(""))

    return total
}

console.log(integer(112))
