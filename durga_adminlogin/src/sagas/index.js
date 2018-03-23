import { loginsuccess, loginfailure } from "../actionCreators/adminlogin";
import { LOGIN } from "../actionTypes/adminlogin";
import { put, takeLatest } from "redux-saga/effects";

function* login(action) {
    try {
        let url = yield fetch("http://10.100.110.132:4000/users/login", {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify(action.loginUser)
        }).then(result => result.json()
            );

          yield put(loginsuccess(url));
        }
    catch (error) 
        {
        yield put(loginfailure(error));
        }
}
export function* getProductsWatcher() {
    yield [
        takeLatest(LOGIN, login)
    ];
}
