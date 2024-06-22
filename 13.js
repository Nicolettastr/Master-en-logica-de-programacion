// Dado una array, dividirlo en tantos sub arrays como sea necesario basandonos en un numero que indique su tama;o
// Dividirlo en arrays de X elementos

const divideArray = (array, num) => {
    let newArray = [];

    for (let element of array) {
        let last = newArray[newArray.length - 1];

        if (!last || last.length === num) {
            newArray.push([element]);
        } else {
            last.push(element);
        }
    }

    return newArray;
};

console.log(divideArray([7, 5, 3, 4, 6], 3));
