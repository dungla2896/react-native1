import { all } from 'redux-saga/effects';
import signUpSaga from '../features/signup/signupSaga';

export default function* rootSaga() {
    yield all([
        signUpSaga(),
    ])
}