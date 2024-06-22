//Dado un numero, mostrar su serie de fibonacci. La serie de fibonacci es un orden de numeros donde cada numero es la suma de los 2 anteriores

const fibonacci = (num) => {
    let set = [0, 1];

    for (let i = 2; i <= num; i++) {
        set.push(set[i - 2] + set[i - 1]);
    }

    return [set, set[num]];
};

console.log(fibonacci(15));
