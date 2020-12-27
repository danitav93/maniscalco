import {fork} from 'redux-saga/effects'
import {companiesSaga} from "./company.saga";
import {sessionSaga} from "./session.saga";
import {animalSaga} from "./animal.saga";


export function* rootSaga() {
    yield fork(companiesSaga);
    yield fork(sessionSaga);
    yield fork(animalSaga);
}
