import {Events, LoadSessionGroups, UserSubmittedNewSession,} from "../events";
import {call, delay, fork, put, takeLatest} from "redux-saga/effects";
import {db, Group} from "../../dbApi";
import {animalUpdated, sessionCreated, sessionGroupsLoaded} from "../actions";
import {NavigationHandler} from "../../navigation/NavigationService";


function* loadSessionGroupsSaga(event: LoadSessionGroups) {
    const groups: Group[] = yield call(db.getGroupsBySessionId, event.payload);
    yield put(sessionGroupsLoaded(groups));
}

function* watchLoadSessionGroups() {
    yield takeLatest(Events.loadSessionGroups, loadSessionGroupsSaga);
}

function* createSessionSaga(event: UserSubmittedNewSession) {
    const sessionId: string = yield call(db.createSession, event.payload);
    yield delay(1000);
    NavigationHandler.navigateToSessionDetails(sessionId);
    yield put(sessionCreated());
}

function* watchCreateSession() {
    yield takeLatest(Events.userSubmittedNewSession, createSessionSaga);
}

export function* sessionSaga() {
    yield fork(watchLoadSessionGroups);
    yield fork(watchCreateSession);
}
