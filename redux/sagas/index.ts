import { call, put, takeLatest, fork, all } from 'redux-saga/effects'
import {
    companyDetailLoaded, companySessionsLoaded,
    filteredCompaniesLoaded,
} from "../action";
import {Company, db, Session} from "../../dbApi";
import {Events, LoadCompanyDetails, UserChangedSearchCompanyFilter} from "../events";

function* loadFilteredCompaniesSaga(event: UserChangedSearchCompanyFilter) {
    const companies = yield call( db.getCompaniesBySearchFilter, event.payload);
    yield put(filteredCompaniesLoaded(companies));
}

function* watchLoadFilteredCompanies() {
    yield takeLatest(Events.userChangedSearchCompanyFilter, loadFilteredCompaniesSaga);
}

function* loadCompanyDetailSaga(event: LoadCompanyDetails) {
    const [company, sessions]: [Company, Session[]] = yield all([call( db.getCompanyById, event.payload), call( db.getSessionsByCompanyId, event.payload)])
    yield put(companyDetailLoaded(company));
    yield put(companySessionsLoaded(sessions));
}

function* watchLoadCompanyDetail() {
    yield takeLatest(Events.loadCompanyDetails, loadCompanyDetailSaga);
}

function* companiesSaga () {
    yield fork(watchLoadFilteredCompanies);
    yield fork(watchLoadCompanyDetail);
}

export function* rootSaga () {
    yield fork(companiesSaga);
}