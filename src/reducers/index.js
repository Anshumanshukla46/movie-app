import { ADD_MOVIES } from '../actions/index';

const initialMovieState = {
    list: [],
    favourites: []
}

// reducer should use pure function

// state = [], it is current state because globally state will have movies

export default function movies(state = initialMovieState, action) {

    // reducer have to return something either "new state" or "prev-state";
    // while in new state we should not change the current-state instead just return the new state directly


    // spread opertor of javascript 
    if (action.type === ADD_MOVIES) {
        return {
            ...state,
            list: action.movies
        }
    }

    return state;
}
