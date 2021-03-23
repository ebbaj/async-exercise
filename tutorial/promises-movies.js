//Tutorial: https://www.freecodecamp.org/news/async-await-in-javascript/

//A promise is a value that may produce a value in the future. 
//That value can either be resolved or unresoved (in some error cases, like a network failure).
//It works like a real-life promise. 
//It has three states: fulfilled, rejected or pending.

//Fulfilled: onFullfilled() will be called (for example, resolve() was called).
//Rejected: onRejected() will be called (for example, reject() was called).
//Pending: not yet fulfilled or rejected.

//------- EXAMPLE -------
//Promise takes two parameters, resolve and reject.
//When something goes wrong, reject is called, or else resolve is called.

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

console.log("PROMISES:");

function getMovies() {
    setTimeout(() => {
        movies.forEach((movie, index) => {
            console.log(movie.title)
        })
    }, 1000);
}

function createMovie(movie) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            movies.push(movie);

            const error = false;

            if(!error) {
                resolve();
            } else {
                reject('Error: Something went wrong!')
            }
        }, 2000);
    })
}

createMovie(
    {
        title: `Return of the Jedi`,
        body: `Luke Skywalker attempts to bring his father back to the light side of the Force. At the same time, the rebels hatch a plan to destroy the second Death Star.`
    }).then(getMovies);

//If we get an error, it will be something like "Error: Something went wrong!", and if not, the promise will resolve.
//Once the promise is resolved, it calls for the .then() keyword and getMovies().