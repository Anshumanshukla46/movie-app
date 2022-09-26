
// {
//     // necessary
//     type: 'ADD_MOVIES',
//         movies: [m1, m2, m3];
// }


// good if using in multiple cases
//  action types
export const ADD_MOVIES = "ADD_MOVIES";

export const ADD_FAVOURITE = "ADD_TO_FAVOURITES";

export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";



export const SET_SHOW_FAVOURITES = "SET_SHOW_FAVOURITES";

// these function as action creators 
export function addMovies(movies) {
    return (
        {
            type: ADD_MOVIES,
            movies: movies
        }
    );
}


export function addFavourite(movie) {
    return (
        {
            type: ADD_FAVOURITE,
            // movies: movie
            movie
        }
    );
}

export function removeFromFavourite(movie) {
    return (
        {
            type: REMOVE_FROM_FAVOURITES,
            // movies: movie
            movie
        }
    );
}


export function setShowFavourite(val) {
    return (
        {
            type: SET_SHOW_FAVOURITES,
            // movies: movie
            val
        }
    );
}