//Dado un array de objetos, devolver cuales son las aficiones mas comunes de los usuarios

const hobbiesMostLiked = (arr) => {
    const results = {};

    arr.map((element) => {
        Object.entries(element).map(([key, value]) => {
            if (key === "hobbies") {
                value.map((item) => {
                    if (!results[item]) {
                        results[item] = 1;
                    } else {
                        results[item]++;
                    }
                });
            }
        });
    });
    // let maxKey = "";
    // let maxValue = -Infinity;

    // for (const [key, value] of Object.entries(results)) {
    //     if (value > maxValue) {
    //         maxValue = value;
    //         maxKey = key;
    //     }
    // }

    // console.log(`${maxKey}: ${maxValue}`);
    return results;
};

const users = [
    { name: "victor", hobbies: ["cinema", "soccer", "tennis", "video games"] },
    { name: "luis", hobbies: ["cinema", "tennis", "video games"] },
    { name: "raul", hobbies: ["soccer", "tennis", "video games"] },
    { name: "pedro", hobbies: ["video games"] },
];

console.log(hobbiesMostLiked(users));
