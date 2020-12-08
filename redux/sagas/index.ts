import {fork} from 'redux-saga/effects'
import {companiesSaga} from "./company";
import {sessionSaga} from "./session";


export function* rootSaga() {
    yield fork(companiesSaga);
    yield fork(sessionSaga);
}
