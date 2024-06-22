/* 
Dado un array, crear otro con el primer y el ultimo elemento del array
*/

const newArray = (arr) => {
    let newArray = [];

    newArray.push(arr[0], arr[arr.length - 1]);

    return newArray;
};

console.log(newArray([100, 120, 150, 8450]));
