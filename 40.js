/* 
Dado UN ARRAY DE NUMEROS DEVOLVER EL VALOR MAS BAJO Y EL VALOR MAS ALTO
*/

const values = (arr) => {
    let highest = 0;
    let smallest = 0;

    arr = arr.sort();

    highest = arr[arr.length - 1];
    smallest = arr[0];

    return `the highest value is ${highest} and the smallest one is ${smallest}`;
};

console.log(values([1, 4, 5, 3, 2]));
console.log(values([3, 7, 2, 9, 1]));
console.log(values([8, 5, 2, 6, 4]));
console.log(values([9, 2, 6, 1, 4]));
console.log(values([5, 8, 3, 7, 2]));
console.log(values([1, 6, 4, 9, 3]));
