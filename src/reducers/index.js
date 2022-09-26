import {
    ADD_MOVIES, ADD_FAVOURITE, REMOVE_FROM_FAVOURITES, SET_SHOW_FAVOURITES
} from '../actions/index';



const initialMovieState = {
    list: [],
    favourites: [],
    showFavourites: false
}

// reducer should use pure function

// state = [], it is current state because globally state will have movies

export default function movies(state = initialMovieState, action) {

    // reducer have to return something either "new state" or "prev-state";
    // while in new state we should not change the current-state instead just return the new state directly


    // spread opertor of javascript 
    /*    if (action.type === ADD_MOVIES) {
            return {
                ...state,
                list: action.movies
            }
        } */



    switch (action.type) {
        case ADD_MOVIES:
            return {
                ...state, //spread opertor of javascript 
                list: action.movies
            }

        case ADD_FAVOURITE:
            return {
                ...state,
                favourites: [...state.favourites, action.movie]
            }

        case REMOVE_FROM_FAVOURITES:
            const filteredArray = state.favourites.filter(
                movie => movie.Title != action.movie.Title
            );

            return {
                ...state,
                favourites: filteredArray
            };

        case SET_SHOW_FAVOURITES:

            return {
                ...state,
                showFavourites: action.val
            };


        default:
            return state;


    }
}
