// Dado un texto y una busqueda censurar todas las coincidencias de la busqueda en el texto con [-CENSURADO-]

// Si texto o busqueda estan vacio mostrar ""No puedes leer el texto y la busqueda" en el caso de que ambos parametros no lleguen

const censor = (text, search) => {
    const string = text;
    const exist = [];
    
    const censorWord = string.split(' ').map(item => {
       
        if (item === search) {
            exist.push(item);
            return `-CENSURADO-`;
       } else if (item !== search) {
            return item
       }
    })

      if (exist.length > 0) {
        return censorWord.join(' ')
      } else {
        return 'No puedes leer el texto y la busqueda'
      }
}

console.log(censor(' como estas?, y chao', 'hola'))