import * as user from '../actions/user';

export const initialState = {
    //Have a people array responsible for getting the data and setting to the array.
    people: [],
    user: undefined,
    //Have the loading state indicate if it's done getting data.
    loading: true,
    //Have state for error message for recieving an error.
    errorMessage: '',
  }

export default (state=initialState, action) => {
    switch(action.type) {
        case user.GET_PEOPLE: 
            return {...state, loading: action.payload};
        case user.GET_PEOPLE_FULFILLED:
            return {...state, people: action.payload, loading: action.loading};
        case user.GET_PEOPLE_REJECTED:
            return {...state, errorMessage: action.payload, loading: action.loading};
        case user.SET_LOGIN_STATE:
            return {...state, user: action.payload};
        default: 
            return state;
    }
}

export function isLogin(state) {
    if (state.user){
        return true;
    }
    return false;
}

export function getUser(state){
    return state.user;
}