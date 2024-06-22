/* Dado un numero, indicar que tipo de angulo es 

ejemplo: 

angulo(47) agudo
angulo(90) recto

*/

const typeOfAngle = (num) => {
    let result = "Introduce a number";

    if (isNaN(num)) {
        return result;
    }

    if (num > 0 && num < 90) {
        result = "Agudo";
    } else if (num === 90) {
        result = "recto";
    } else if (num > 90 && num < 180) {
        result = "obtuso";
    } else if (num === 180) {
        result = "llano";
    } else if (num > 180 && num < 360) {
        result = "concavo";
    } else if (num === 360) {
        result = "completo";
    } else {
        result = "An angle goes between 0 and 360 deg";
    }

    return result;
};

console.log(typeOfAngle(89));
