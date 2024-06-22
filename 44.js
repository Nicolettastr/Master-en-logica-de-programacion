//Dado un array de strings, devolver otro con los valores que esten formados por mas de dos palabras

const has2words = (arr) => {
    let newElements = [];

    for (let word of arr) {
        if (word.split(" ").length >= 2) {
            newElements.push(word);
        }
    }

    return newElements;
};

console.log(has2words(["hello", "san francisco", "hello nicole"]));
