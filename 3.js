//Dada una palabra, buscarla en una frase y devolver cuantas veces aparece en la frase. la frase y la palabra deben ser parametros de una funcion

const findCoincidences = (phrase, word) => {
    const wordLowerCase = word.toLowerCase()
    const phraseArray = phrase
        .toLowerCase()
        .replace(/[!.,:;_-]/gi, "")
        .split(" ")
        .filter(e => e === wordLowerCase)

    console.log(phraseArray)

    const coincidences = phraseArray.length

    return coincidences
}

console.log(
    findCoincidences("hola soy una palabra en una frase, PALABRA.", "palabra")
)
