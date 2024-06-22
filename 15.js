// Dada una cadena de texto, devolver el caracter mas usado

const mostUsedLetter = (text) => {
    const result = {};
    const word = text.replace(/\s/g, "");

    for (letter of word) {
        if (!result[letter]) {
            result[letter] = 1;
        } else {
            result[letter] += 1;
        }
    }

    const values = Object.values(result);
    const highestValue = Math.max(...values);
    let mostUsedLetter = "";

    Object.entries(result).map((item) => {
        if (item[1] === highestValue) {
            mostUsedLetter = item[0];
        }
    });

    return mostUsedLetter;
};

console.log(mostUsedLetter("hooolaaa?"));
