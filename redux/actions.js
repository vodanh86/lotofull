import * as t from './actionTypes';
import { LoginUrl } from '../constants/Api';
import { Alert } from 'react-native'; // to show alerts in app

// this is what our action should look like which dispatches the "payload" to reducer
const setLoginState = (loginData) => {
  return {
    type: t.SET_LOGIN_STATE,
    payload: loginData,
  };
};

export const login = (loginInput) => {
    const { username, password } = loginInput;
    return (dispatch) => {  // don't forget to use dispatch here!
      return fetch(LoginUrl, {
        method: 'POST',
        headers: {  // these could be different for your API call
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginInput),
      })
        .then((response) => response.json())
        .then((json) => {
          if (json.msg === 'success') { // response success checking logic could differ
            dispatch(setLoginState({ ...json, userId: username })); // our action is called here
          } else {
            Alert.alert('Login Failed', 'Username or Password is incorrect');
          }
        })
        .catch((err) => {
          Alert.alert('Login Failed', 'Some error occured, please retry');
          console.log(err);
        });
    };
  };