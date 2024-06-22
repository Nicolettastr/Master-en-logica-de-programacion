//Dado una cadena de texto y un numero, recortar el string mostrando los x primeros caracteres

const cutText = (text, num) => {
    let result = "";

    if (typeof text === "string" && typeof num === "number") {
        for (let i = 0; i < text.length; i++) {
            if (result.length < num) {
                result += text[i];
            }
        }
    } else {
        console.log("Introduce los datos correctos");
    }

    return result;
};

console.log(cutText("cursos de desarrollo web", 8));
