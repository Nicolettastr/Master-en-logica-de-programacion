//Dado un array de alumnos (nombre y nota) mostrar cuantos alumnos estan suspensos y cuantos aprobados

const finalState = (arr) => {
    const suspended = [];
    const approved = [];
    const finalResults = {
        approved: 0,
        suspended: 0,
    };

    arr.map((element) => {
        if (element[1] < 5) {
            suspended.push(element);
        } else {
            approved.push(element);
        }
    });

    finalResults.suspended = suspended.length;
    finalResults.approved = approved.length;

    return finalResults;
};

console.log(
    finalState([
        ["Victor", 6],
        ["David", 2],
        ["Luis", 5],
        ["Alberto", 3.5],
        ["Ana", 1],
    ])
);
