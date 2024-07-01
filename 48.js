//Dado un string, devolver cuales son las letras que aparecen solo una vez y cual es la primera

const getUniqueWordAndFirstLetter = (words) => {
    const listOfWords = words.split(/\s+/);

    let result = "";

    for (let i = 0; i < listOfWords.length; i++) {
        if (result === "") {
            result = listOfWords[i];
        } else if (listOfWords[i] !== result) {
            result = listOfWords[i];
        }
    }

    const firstLetter = result.split("");

    return `The unique word is ${result} and its first letter is ${firstLetter[0]}`;
};

console.log(getUniqueWordAndFirstLetter("frase frase hoy hoy mañana"));
