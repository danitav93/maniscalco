import { call, put, takeLatest } from 'redux-saga/effects'
import {Actions, filteredCompaniesLoaded, UserChangedSearchCompanyFilter} from "../action";
import {db} from "../../dbApi";

function* dbSagaExample(action: UserChangedSearchCompanyFilter) {
    const companies = yield call( db.getCompaniesBySearchFilter, action.payload);
    yield put(filteredCompaniesLoaded(companies));
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* mySagaExample() {
    yield takeLatest(Actions.userChangedSearchCompanyFilter, dbSagaExample);
}

export default mySagaExample;