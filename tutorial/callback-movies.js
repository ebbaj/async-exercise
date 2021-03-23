//Tutorial: https://www.freecodecamp.org/news/async-await-in-javascript/

//Callback functions are those functions that have been passed to another function as an argument.

const movies = [
    { 
        title: `A New Hope`, 
        body: `After Princess Leia, the leader of the Rebel Alliance, is held hostage by Darth Vader, Luke and Han Solo must free her and destroy the powerful weapon created by the Galactic Empire.`
    },
    {
        title: `The Empire Strikes Back`, 
        body: `Darth Vader is adamant about turning Luke Skywalker to the dark side. Master Yoda trains Luke to become a Jedi Knight while his friends try to fend off the Imperial fleet.`
    }
]

console.log("CALLBACK:");

function getMovies() {
    setTimeout(() => {
        movies.forEach((movie, index) => {
            console.log(movie.title)
        })
    }, 1000);
}

//Before we added the callback function, getMovies() would run before createMovie() (due to the time in the setTimeout), and therefore not display the new movie that was added in createMovie().
//In createMovie(), pass a function callback and call the function right after the new movie is pushed (instead of waiting two seconds).

function createMovie(movie, callback) {
    setTimeout(() => {
        movies.push(movie);
        callback();
    }, 2000);
}

//Call getMovies() when creating a new movie (insted of above it).

createMovie(
    {
    title: `Return of the Jedi`,
    body: `Luke Skywalker attempts to bring his father back to the light side of the Force. At the same time, the rebels hatch a plan to destroy the second Death Star.`
    }, getMovies)