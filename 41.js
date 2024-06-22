/*
Dado un numero, mostrar un triangulo de astericos con ese numero de filas
*/

const triangle = (num) => {
    let half = Math.floor(num - 1);

    for (let fila = 0; fila < num; fila++) {
        let level = "";

        for (let column = 0; column < 2 * num - 1; column++) {
            if (half - fila <= column && half + fila >= column) {
                level += "*";
            } else {
                level += " ";
            }
        }

        console.log(level);
    }
};

console.log(triangle(4));
