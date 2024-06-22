// Dados 2 numeros, indicar cual es mayor y cual es menor

const isGreater = (num_one, num_two) => {
    let result = "";

    if (!isNaN(num_one) && !isNaN(num_two)) {
        if (num_one > num_two) {
            result = "HIGHEST: " + num_one + "LOWEST: " + num_two;
        } else if (num_one < num_two) {
            result = "HIGHEST: " + num_two + " LOWEST: " + num_one;
        } else {
            result = "numbers are equal";
        }
    } else {
        console.log("Please, use numbers");
    }

    return result;
};

console.log(isGreater(12, 12));
