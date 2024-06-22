//Dadas dos cadenas de texto, crear un algoritmo que compruebe si son anagramas entre si.

//Una cadena es un anagrama de otra si usa los mismos caracteres en la misma cantidad

//no tener en cuanta espacios, simbolos, puntos, etc

// ejemplo: riesgo, sergio => true
//          nicole, amarillo => false

const cleanText = (text) => {
    return text.replace(/[^\w]/gi, "").toLowerCase().split("").sort().join("");
};

const isAnagram = (word_one, word_two) => {
    let result = false;
    const word_one_clean = cleanText(word_one);
    const word_two_clean = cleanText(word_two);

    if (word_one_clean === word_two_clean) {
        result = true;
    }

    return result;
};

console.log(isAnagram("rieSGO!!!...***", "sergio---/"));
