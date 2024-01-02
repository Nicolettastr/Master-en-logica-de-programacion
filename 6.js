//Dibujar un cuadrado hueco con asteriscos

const side = num => {
    let side = ""

    for (let i = 0; i < num; i++) {
        side += "*"
    }

    return side
}

const square = num => {
    let paint = side(num) + "\n"
    let content = ""

    for (let i = 2; i < num; i++) {
        content = "*"

        for (let x = 0; x < num - 2; x++) {
            content += " "
        }

        content += "*"

        paint += content + "\n"
    }

    paint += side(num)

    return paint
}

console.log(square(10))
