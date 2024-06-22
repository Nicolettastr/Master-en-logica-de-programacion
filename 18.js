//dado un numero, mostrar todos sus numeros divisores

const divider = (num) => {
    let result = [];

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            result.push(i);
        }
    }

    return result;
};

console.log(divider(50));
