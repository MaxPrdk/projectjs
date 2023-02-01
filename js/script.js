const numberOfFilms = +prompt('How many movies did you watched?','');

const personalMovieDB = {
     count: numberOfFilms,
     movies: {},
     actors:{},
     genres:[],
     private:false
};

const a = prompt('Last watched movie?',''),
    b = prompt('Rate it',''),
    c = prompt('Last watched movie?',''),
    d = prompt('Rate it','');

    personalMovieDB.movies[a] = b; 
    personalMovieDB.movies[c] = d; 

    console.log(personalMovieDB);