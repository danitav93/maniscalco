import {
    Events,
    LoadSessionGroups,
} from "../events";
import { call, fork, put, takeLatest, delay} from "redux-saga/effects";
import { db, Group} from "../../dbApi";
import {
    companyDetailLoaded,
    companySessionsLoaded, sessionGroupsLoaded,
} from "../action";



function* loadSessionGroupsSaga(event: LoadSessionGroups) {
    const groups: Group[] = yield call(db.getGroupsBySessionId, event.payload);
    yield delay(2000);
    yield put(sessionGroupsLoaded(groups));
}

function* watchLoadSessionGroups() {
    yield takeLatest(Events.loadSessionGroups, loadSessionGroupsSaga);
}

export function* sessionSaga() {
    yield fork(watchLoadSessionGroups);
}
