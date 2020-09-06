import { fork } from 'redux-saga/effects'
import {companiesSaga} from "./company";



export function* rootSaga () {
    yield fork(companiesSaga);
}
