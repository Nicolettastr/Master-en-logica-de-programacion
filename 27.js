//Dado un numero, mostarr a cuantos años, meses y dias equivalen

const equivalentTime = (num) => {
    let years = Math.floor(num / 365);
    let days_remaining = num % 365;
    let months = Math.floor(days_remaining / 30);
    days_remaining = days_remaining % 30;

    return `This person has lived ${years} years, ${months} months and ${days_remaining} days`;
};

console.log(equivalentTime(35154841));
