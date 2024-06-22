/*
Dado un texto devolver cuantas consonantes y cuantas vocales tiene
*/

const letters = (word) => {
    const vocals = ["a", "e", "i", "o", "u", "á", "é", "í", "ó", "ú"];
    word = word.replace(/[^\p{L}\s]/gu, "");
    word = word.replace(/\s/g, "").toLowerCase();

    let results = {
        vocals: 0,
        consonants: 0,
    };

    for (let letter of word) {
        if (vocals.includes(letter)) {
            results.vocals++;
        } else {
            results.consonants++;
        }
    }

    return results;
};

console.log(letters("hola, me llamo nicoleNICOLE 123"));
