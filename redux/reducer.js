import { initialState } from './initialState';
import * as t from './actionTypes';

//Define your reducer that will return the initialState by default
const reducer = (state = initialState, action) => {
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

//Define your action create that set your loading state.
export const fetchData = (bool) => {
    //return a action type and a loading state indicating it is getting data. 
    return {
        type: t.GET_PEOPLE,
        payload: bool,
    };
}

//Define a action creator to set your loading state to false, and return the data when the promise is resolved
export const fetchDataFulfilled = (data) => {
    console.log(data);
    //Return a action type and a loading to false, and the data.
    return {
        type: t.GET_PEOPLE_FULFILLED,
        payload: data,
        loading: false,
    };
}

//Define a action creator that catches a error and sets an errorMessage
export const fetchDataRejected = (error) => {
    //Return a action type and a payload with a error
    return {
        type: t.GET_PEOPLE_REJECTED,
        payload: error,
        loading: false,
    };
}

//Export the reducer as a default export 
export default reducer;