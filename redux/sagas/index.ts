import { call, put, takeLatest } from 'redux-saga/effects'
import {Actions, companiesLoaded, UserPressedButton2} from "../action";
import {db} from "../../dbApi";

function* dbSagaExample(action: UserPressedButton2) {
    try {
        const companies = yield call( db.getCompaniesBySearchFilter, 'ghjghj');
        yield put(companiesLoaded(companies));
    } catch (e) {
        yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* mySagaExample() {
    yield takeLatest(Actions.userPressedButton2, dbSagaExample);
}

export default mySagaExample;