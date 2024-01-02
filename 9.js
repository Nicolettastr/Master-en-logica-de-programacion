// Dados 2 arrays devolver un array con solo los elementos comunes entre ambos

const constants = (arr1, arr2) => {
    // let length = arr1.length > arr2.length ? arr1.length : arr2.length

    // const duplicate = []

    // for (let i = 0; i < length; i++) {
    //     for (x = 0; x < length; x++) {
    //         if (arr1[i] === arr2[x]) {
    //             duplicate.push(arr1[i])
    //         }
    //     }
    // }

    // console.log(duplicate)
    // const total = [...new Set(duplicate)]

    // return total

    const filtered = arr1.filter(element => {
        return arr2.includes(element)
    })

    return filtered
}

console.log(constants([4, 5, 6, 7, 6], [7, 8, 9, 7, 5]))
console.log(
    constants(
        ["victor", "paco", "nico", "luca"],
        ["manu", "leti", "nico", "paco"]
    )
)
