//Dado un objeto, comprobar si existe una propiedad en concreto

const hasProperty = (object, property) => {
    return object.hasOwnProperty(property);
};

console.log(
    hasProperty(
        {
            name: "Nicole",
            lastname: "Struggia",
            age: 27,
        },
        "pet"
    )
);
