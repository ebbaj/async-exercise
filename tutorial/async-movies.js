//Tutorial: https://www.freecodecamp.org/news/async-await-in-javascript/

//Async means asynchronous.
//It allows a program to run a function without freezing the entire program.
//This is done using the Async/Await keyword.

//Asynnc/Await makes it easier to write promises. 
//The keyword 'async' before a function makes the function return a promise, always.
//The keyword 'await' is used inside async functions, which makes the program wait until the Promise resolves.

/* ------- EXAMPLE ------- */

async function example() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("ASYNC/AWAIT:"), 1000)
    });

    let result = await promise; //wait until the promise resolves (*)

    console.log(result); //"done!"
}

example();

//The function execution "pauses" at the (*) line and resumes when the promise is fulfilled, with 'result' becoming its result.
//So the code above shows "done!" in one second.

/* ------- PRACTICE EXAMPLE ------- */
const movieList = document.querySelector(".movie-list");
const movieListItem = document.createElement('li');
const movieListHeading = document.createElement('h3');
const movieListBody = document.createElement('p');

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

function getMovies() {
   setTimeout(() => {
        movies.forEach((movie) => {
            console.log(movie.title)
            outputMovies(movie.title, movie.body);    
        })
    }, 0000); 
}

function outputMovies(a, b) {
    movieListHeading.innerHTML = a;
    movieListBody.innerText = b;
    movieListItem.appendChild(movieListHeading);
    movieListItem.appendChild(movieListBody);
    movieList.appendChild(movieListItem);    
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
        }, 1000)
    })
}

async function init() {  
    await createMovie(
    {
        title: `Return of the Jedi`,
        body: `Luke Skywalker attempts to bring his father back to the light side of the Force. At the same time, the rebels hatch a plan to destroy the second Death Star.`
    });
    
    getMovies(); //(*)
    console.log(movies);
}

init();

//In the above example, getMovies() at the (*) line is waiting for createMovie() to be executed in the async function.
//In other words, createMovie() is async, so getMovies() will only run after createMovie() is done.

