import { PayloadAction } from "@reduxjs/toolkit";
import { call, fork, take, put } from "redux-saga/effects";
import { userActions } from "./signupSlice";
import { Username } from "../../models/username";
import userApi from "../../api/postApi";



function* handleSignUp(padload: Username) {
    let errorMessage: string = '';
    let dataToken = {
        token: '',
        puk: '',
    }
    try {
        console.log('padload: ',padload)
        // const data: Username = yield userApi.signUp(padload).catch(e => {
        //     errorMessage = e.response.statusText;
        // })
        yield put(userActions.signupSuccess(padload));
        // dataToken.token = data.CONTENT.AUTH.token;
        // dataToken.puk = data.CONTENT.AUTH.puk;
        //localStorage.setItem('access_token', JSON.stringify(dataToken));
    } catch (error) {
        if(error instanceof Error) {
            yield put(userActions.signupFailed(errorMessage));
        }
    }
    // redirect to main page
    //const token = localStorage.getItem('access_token');
    // if(token !== null) {
    //     yield put(push('/home'));
    // }
}

function* handleLogout() {
    // redirect to login page
    // if(localStorage.getItem('access_token') !== null) {
    //     localStorage.removeItem('access_token')
    //     yield put(push('/'))
    // }
}

function* watchSignUpFlow() {
    while(true) {
        const isLoggedIn = Boolean(true)
        
        if(!isLoggedIn) {
            const action: PayloadAction<Username> = yield take(userActions.signup.type);
            yield fork(handleSignUp, action.payload)
        }

        yield take([userActions.logout.type, userActions.signupFailed.type])
        yield call(handleLogout)
    }
}

export default function* signUpSaga() {
    yield fork(watchSignUpFlow);
}