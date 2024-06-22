//Dada una cadena de texto, colocar en mayuscula la primera letra de cada palabra en la cadena y luego devolver la cadena completa

const toCapitalInit = (text) => {
    const words = text.split(" ");
    let capitalized = "";
    let result = [];

    for (let element of words) {
        const capital = element.slice(0, 1).toUpperCase();
        const body = element.substr(1);

        capitalized = capital + body;

        result.push(capitalized);
    }

    return result.join(" ");
};

console.log(toCapitalInit("hola soy nicole, como estas?"));
