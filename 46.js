// Dado un string devolver todos sus substrings

const subsStrings = (word) => {
    let substrings = [];

    for (let letter in word) {
        let init = parseInt(letter);

        for (let i = 0; i <= word.length - init; i++) {
            const final = parseInt(i) + init;
            substrings.push(word.substring(init, final));
        }
    }

    return substrings.filter((element) => element.length > 1);
};

console.log(subsStrings("hola"));
