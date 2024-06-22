/* Dado un array de numeros, devolver el array sin elementos duplicados. si hay un string, eliminarlo del array */

const uniqueElements = (arr) => {
    let unique = [];

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "string") {
            console.log("soy un string", arr[i]);
            let result = arr.filter((item) => item !== arr[i]);
            unique = [...new Set(result)];
        } else {
            unique = [...new Set(arr)];
        }
    }

    return unique;
};

console.log(uniqueElements([1, 2, 1, 1, 1, 3, 4]));

/* video */

const uniqueElementsTwo = (elements) => {
    elements = elements.filter((element) => {
        return typeof element === "number";
    });

    let no_duplicates = new Set(elements);

    return Array.from(no_duplicates);

    // let no_duplicates = [...new Set(elements)];

    // return no_duplicates;
};

console.log(uniqueElementsTwo([1, 2, 1, 1, 1, 3, 4]));
