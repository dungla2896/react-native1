import AsyncStorage from "@react-native-async-storage/async-storage";
import { PayloadAction } from "@reduxjs/toolkit";
import { call, fork, take, put } from "redux-saga/effects";
import userApi from "../../api/postApi";
import { UserLogin } from "../../models/username";
import { signInActions, LogginPayload } from "./signinSlice"

function* handleLogin(padload: LogginPayload){
    let message: string = '';
    let dataToken = {
        token: '',
        puk: '',
    }
    try {
        const login = padload;
        const username = login.login;
        // const response: UserLogin = yield userApi.signin(padload, username).catch(e => {
        //     console.log(e)
        // })
        const response: UserLogin = yield userApi.signin(padload, username)
        console.log(response);
        yield put(signInActions.loginSuccess(response));
        dataToken.token = response.CONTENT.token;
        dataToken.puk = response.CONTENT.puk;
        AsyncStorage.setItem('access_token', JSON.stringify(dataToken));
    } catch (error) {
        if(error instanceof Error) {
            yield put(signInActions.loginFailed(message));
        }
    }
}

function* handleLogout() {
    // redirect to login page
    if(AsyncStorage.getItem('access_token') !== null) {
        AsyncStorage.removeItem('access_token')
    }
}

function* watchLoginFlow() {
    while(true) {
        const action: PayloadAction<LogginPayload> = yield take(signInActions.login.type);
        yield fork(handleLogin, action.payload)

        yield take([signInActions.logout.type, signInActions.loginFailed.type])
        yield call(handleLogout)
    }
}

export default function* signInSaga() {
    yield fork(watchLoginFlow);
}