//Dado un string, ponerlo completo en mayusculas o minusculas dependiendo de que haya mas en el string. Si hay mas mayusculas, ponero todo en mayusculas y si hay mas minusculas, ponerlo todo en minusculas

const isUpperCase = (text) => {
    let upper = 0;
    let lower = 0;

    for (let i = 0; i < text.length; i++) {
        if (text[i] === text[i].toUpperCase()) {
            upper++;
        } else {
            lower++;
        }
    }

    if (upper > lower) {
        return text.toUpperCase();
    } else {
        return text.toLowerCase();
    }
};

console.log(isUpperCase("hoLa"));

//video

const isUpper = (text) => {
    let upper = 0;
    let lower = 0;

    for (let letter of text) {
        if (/[A-Z]/.test(letter)) {
            upper++;
        } else {
            lower++;
        }
    }

    if (upper === lower) {
        return "Lowers and Uppers are equal : " + text.toUpperCase();
    } else if (upper > lower) {
        return text.toUpperCase();
    } else {
        return text.toLowerCase();
    }
};

console.log(isUpper("HolA"));
