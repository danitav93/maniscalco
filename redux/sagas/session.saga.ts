import {Events, LoadSessionGroups} from "../events";
import {call, fork, put, takeLatest} from "redux-saga/effects";
import {db, Group} from "../../dbApi";
import {sessionGroupsLoaded} from "../actions";


function* loadSessionGroupsSaga(event: LoadSessionGroups) {
    const groups: Group[] = yield call(db.getGroupsBySessionId, event.payload);
    yield put(sessionGroupsLoaded(groups));
}

function* watchLoadSessionGroups() {
    yield takeLatest(Events.loadSessionGroups, loadSessionGroupsSaga);
}

export function* sessionSaga() {
    yield fork(watchLoadSessionGroups);
}
