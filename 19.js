// Dado un array de objetos de peliculas, mostrar todas las peliculas indicando cual haz visto y cual no

const movies = [
    {
        title: "spiderman",
        director: "juan",
        watched: true,
    },
    {
        title: "spiderman 2",
        director: "juan",
        watched: true,
    },
    {
        title: "spiderman 3",
        director: "juan",
        watched: false,
    },
    {
        title: "spiderman 4",
        director: "juan",
        watched: true,
    },
];

const watchedMovies = (movies) => {
    movies.map((item) => {
        if (item.watched) {
            console.log("You have already watched this movies " + item.title);
        } else {
            console.log("You have to watch this movies " + item.title);
        }
    });

    return movies;
};

console.log(watchedMovies(movies));
