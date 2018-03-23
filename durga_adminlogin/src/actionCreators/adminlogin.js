import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from "../actionTypes/adminlogin";

export function login(loginUser)
{
    return{
        type: LOGIN,
        loginUser   
    }
}
export function loginsuccess(url)
{
    return{
        type: LOGIN_SUCCESS,
        url
    }
}
export function loginfailure(error)
{
    return{
        type: LOGIN_FAILURE,
        error
        }
}