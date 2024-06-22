/* 

Dados dos numeros, devolver los resultados de:

suma
resta
multiplicacion
division

*/

const basicOperations = (num_one, num_two) => {
    let result = {
        sum: num_one + num_two,
        rest: num_one - num_two,
        mult: num_one * num_two,
        div: num_one / num_two,
    };

    return `
        The sum is: ${result.sum},
        The rest is: ${result.rest},
        The mult is: ${result.mult},
        The div is: ${result.div}
    `;
};

console.log(basicOperations(5, 5));
