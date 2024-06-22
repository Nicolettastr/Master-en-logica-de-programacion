//Dada una cadena de texto devolver cuantas vocales tiene

const vocals = (text) => {
    let result = 0;
    let vocals = ["a", "e", "i", "o", "u"];

    for (let i = 0; i < text.length; i++) {
        if (vocals.includes(text[i].toLowerCase())) {
            result++;
        }
    }

    return result;
};

console.log(vocals("hsdjhfgsd?"));

//video

function vocal(text) {
    let coincidences = text.match(/[aeiou]/gi);
    return coincidences ? coincidences.length : 0;
}

console.log(vocal("sdfsdsfdhks?"));
