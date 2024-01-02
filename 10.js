// Dado un numero mostrar una escalera con escalones de este simbolo '[-]'

const stares = num => {
    const symbol = "[-]"
    let content = ""

    for (let i = 1; i <= num; i++) {
        let stair = ""

        for (let x = 1; x <= i; x++) {
            stair += symbol
        }

        content += stair + "\n"
    }

    return content
}

console.log(stares(20))
