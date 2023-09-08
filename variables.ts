let movieTitle: string = "Amadeus"
movieTitle = "Arrival"
movieTitle = 9;
movieTitle.toUpperCase();

let numCatLives: number = 9;
numCatLives += 1;
// numCatLives = 'zero'

let gameOver: boolean = false;
gameOver = true;
gameOver = 'true';


// Any type
let thing: any = 'hello';
thing = 1;
thing = false;
thing = [];
thing()
thing.toUpperCase()


const movies = ["Arrival", "The thing", "Aliens, Amadeus"]

let foundMovie: string;

for (let movie of movies) {
    if (movie === "Amadeus") {
        foundMovie = "Amadeus";
    }
}

foundMovie();
fonudMovie = 1;
