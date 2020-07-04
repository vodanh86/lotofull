//Define your action types 
//Initiate the api call
export const GET_PEOPLE = 'GET_PEOPLE';
//Gets the players on api call is fullfilled
export const GET_PEOPLE_FULFILLED = 'GET_PEOPLE_FULFILLED';
//When there is a error return an errror action type. 
export const GET_PEOPLE_REJECTED = 'GET_PEOPLE_REJECTED';


//Define your action create that set your loading state.
export const fetchData = (bool) => {
    //return a action type and a loading state indicating it is getting data. 
    return {
        type: GET_PEOPLE,
        payload: bool,
    };
}

//Define a action creator to set your loading state to false, and return the data when the promise is resolved
export const fetchDataFulfilled = (data) => {
    console.log(data);
    console.log(2222);
    //Return a action type and a loading to false, and the data.
    return {
        type: GET_PEOPLE_FULFILLED,
        payload: data,
        loading: false,
    };
}

//Define a action creator that catches a error and sets an errorMessage
export const fetchDataRejected = (error) => {
    //Return a action type and a payload with a error
    return {
        type: GET_PEOPLE_REJECTED,
        payload: error,
        loading: false,
    };
}

//Define your action creators that will be responsible for asynchronouse operatiosn 
export const getPeople = () => {
    //IN order to use await your callback must be asynchronous using async keyword.
    console.log(5555);
    return async dispatch => {
        //Then perform your asynchronous operations.
        try {
            //Have it first fetch data from our starwars url.
            console.log(4444);
            const starWarsPromise = await fetch('http://localhost:8000/users/');
            console.log(333);
            dispatch(fetchData(true));
            //Then use the json method to get json data from api/
            const people = await starWarsPromise.json();
            //Now when the data is retrieved dispatch an action altering redux state.
            dispatch(fetchDataFulfilled(people.results))
          } catch(error) {
            console.log('Getting People Error---------', error);
            dispatch(fetchDataRejected(error))
          }
    }
}
