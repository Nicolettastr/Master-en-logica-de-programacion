//Cuanto es el x porciero de x numero

const percentage = (percentage, number) => {
    const multiplier = percentage / 100

    const total = number * multiplier

    return `El ${percentage}% de ${number} es: ${total}`
}

console.log(percentage(43, 897))
