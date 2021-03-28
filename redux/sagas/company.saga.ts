import {Events, LoadCompanyDetails, UserChangedSearchCompanyFilter} from "../events";
import {all, call, fork, put, takeLatest} from "redux-saga/effects";
import {Company, db, Session} from "../../dbApi";
import {
    companyDetailLoaded,
    companySessionsLoaded,
    filteredCompaniesLoaded,
} from "../actions";


function* loadFilteredCompaniesSaga(event: UserChangedSearchCompanyFilter) {
    const companies = yield call(db.getCompaniesBySearchFilter, event.payload);
    yield put(filteredCompaniesLoaded(companies));
}

function* watchLoadFilteredCompanies() {
    yield takeLatest(Events.userChangedSearchCompanyFilter, loadFilteredCompaniesSaga);
}

function* loadCompanyDetailSaga(event: LoadCompanyDetails) {
    const [company, sessions]: [Company, Session[]] = yield all([call(db.getCompanyById, event.payload), call(db.getSessionsByCompanyId, event.payload)])
    yield put(companyDetailLoaded(company));
    yield put(companySessionsLoaded(sessions));
}

function* watchLoadCompanyDetail() {
    yield takeLatest(Events.loadCompanyDetails, loadCompanyDetailSaga);
}

export function* companiesSaga() {
    yield fork(watchLoadFilteredCompanies);
    yield fork(watchLoadCompanyDetail);
}
