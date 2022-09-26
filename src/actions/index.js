
// {
//     // necessary
//     type: 'ADD_MOVIES',
//         movies: [m1, m2, m3];
// }


// good if using in multiple cases
//  action types
export const ADD_MOVIES = "ADD_MOVIES";


// these function as action creators 
export function addMovies(movies) {
    return (
        {
            type: ADD_MOVIES,
            movies: movies
        }
    );
}