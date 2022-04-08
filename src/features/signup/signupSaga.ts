import { PayloadAction } from "@reduxjs/toolkit";
import { call, fork, take, put } from "redux-saga/effects";
import { userActions } from "./signupSlice";
import { Username } from "../../models/username";
import userApi from "../../api/postApi";
import AsyncStorage from "@react-native-async-storage/async-storage";



function* handleSignUp(payload: Username) {
    let errorMessage: string = '';
    let dataToken = {
        token: '',
        puk: '',
    }
    try {
        const data: Username = yield userApi.signUp(payload)
        console.log(data)
        yield put(userActions.signupSuccess(data));
        dataToken.token = data.CONTENT.AUTH.token;
        dataToken.puk = data.CONTENT.AUTH.puk;
        AsyncStorage.setItem('access_token', JSON.stringify(dataToken))
    } catch (error) {
        if(error instanceof Error) {
            errorMessage = error.message;
            yield put(userActions.signupFailed(errorMessage));
        }
    }
    console.log(errorMessage)
}

function* handleLogout() {
    //redirect to login page
    if(AsyncStorage.getItem('access_token') !== null) {
        AsyncStorage.removeItem('access_token')
    }
}

function* watchSignUpFlow() {
    while(true) {
        const action: PayloadAction<Username> = yield take(userActions.signup.type);
        yield fork(handleSignUp, action.payload)
        yield take([userActions.logout.type, userActions.signupFailed.type])
        yield call(handleLogout)
    }
}

export default function* signUpSaga() {
    yield fork(watchSignUpFlow);
}