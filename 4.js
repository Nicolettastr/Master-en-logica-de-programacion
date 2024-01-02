//dada una cadena de texto, darle la vuelta e invertir el orden de sus caracteres, sin usar metodos propios del; lenguaje, solo estructuras de control.

const inverseText = word => {
    const inverseWord = []
    let result = ""

    for (let i = 0; i < word.length; i++) {
        inverseWord.push(word[i])
    }

    for (let j = inverseWord.length - 1; j >= 0; j--) {
        result += inverseWord[j]
    }

    return result
}

console.log(inverseText("hola"))
