import * as t from '../actions/user';

export const initialState = {
    //Have a people array responsible for getting the data and setting to the array.
    people: [],
    //Have the loading state indicate if it's done getting data.
    loading: true,
    //Have state for error message for recieving an error.
    errorMessage: '',
  }

//Define your reducer that will return the initialState by default
const user = (state = initialState, action) => {
    switch(action.type) {
        case t.GET_PEOPLE: 
        return {...state, loading: action.payload};
        case t.GET_PEOPLE_FULFILLED:
        return {...state, people: action.payload, loading: action.loading};
        case t.GET_PEOPLE_REJECTED:
        return {...state, errorMessage: action.payload, loading: action.loading};
        default: 
        return state;
    }
}

//Export the reducer as a default export 
export default user;