//Dada una cadena de texto, comprobar si es un palindromo o no. Los palindromos son palabras que se leen igual aun estando invertidas

const palindromo = word => {
    const data = word
        .toLowerCase()
        .split("")
        .reverse()
        .filter(e => e != " ")
        .join("")

    const wordUnited = word
        .toLowerCase()
        .split("")
        .filter(e => e != " ")
        .join("")

    console.log(data)

    return data === wordUnited
}

console.log(palindromo("Anita lava la tina"))
