import axios from 'axios';
import {SET_TABLE} from "./pageActions";

export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';
export const REGISTER = 'REGISTER';
export const SET_SIGN_IN = "SET_SIGN_IN";
export const SET_USER_ANSWER = 'SET_USER_ANSWER';


export function logout() {
    return dispatch => {
        axios.get("http://localhost:8080/logout", {
            withCredentials: true,
        })
            .then(result => {
                console.log(result)
            })
            .catch(result => console.log(result));
        dispatch({
            type: LOGOUT,
            payload: false,
        });
        dispatch({
            type: SET_TABLE,
            payload: [],
        });
        localStorage.removeItem("loginIn");
    }
}

export function login(butch) {
    return dispatch => {
        let header = 'Basic ' + btoa(butch.username + ':' + butch.password);
        axios({
            url: 'http://localhost:8080/login',
            method: 'post',
            headers: {
                Authorization: header
            },
        })
            .then(result => {
                console.log(result);
                if (result.status == 200) {
                    localStorage.setItem("loginIn", header);
                    dispatch({
                        type: LOGIN_SUCCESS,
                        payload: "Welcome!",
                    });
                    dispatch({
                        type: SET_SIGN_IN,
                        payload: true,
                    });
                } else {
                    dispatch({
                        type: LOGIN_FAIL,
                        payload: "Incorrect login or password",
                    })
                }
            })
            .catch(result => {
                console.log(result);
                dispatch({
                    type: LOGIN_FAIL,
                    payload: "Incorrect login or password",
                })
            });
    }
}

export function registration(butch) {
    return dispatch => {
        axios({
            method: "post",
            url: 'http://localhost:13200/register',
            data: butch,
        })
            .then(result => {
                console.log(result);
                if (Number(result.status) === 201) {
                    dispatch({
                        type: REGISTER,
                        payload: "You was successfully registered"
                    })
                } else {
                    dispatch({
                        type: REGISTER,
                        payload: "Such user has already existed, enter another login for registration.",
                    });
                }
            })
            .catch(result => {
                console.log(result);
                dispatch({
                    type: REGISTER,
                    payload: "Such user has already existed, enter another login for registration.",
                });
            })
        ;
    }
}


export function setAnswer(userAnswer) {
    return{
        type: SET_USER_ANSWER,
        payload: userAnswer
    }
}

export function setLogin(login) {
    return{
        type: SET_SIGN_IN,
        payload: login
    }
}