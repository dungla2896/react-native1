import { all } from 'redux-saga/effects';
import signUpSaga from '../features/signup/signupSaga';
import signInSaga from '../features/signin/signinSaga';

export default function* rootSaga() {
    yield all([
        signUpSaga(), signInSaga(),
    ])
}