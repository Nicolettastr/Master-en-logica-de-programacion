/* Dado un texto, comprobar que sea un email valido */

const isAnEmail = (email) => {
    return /^\w+@\w+\.\w+$/gi.test(email);
};

console.log(isAnEmail("nicolettastruggia@hotmail.com"));
