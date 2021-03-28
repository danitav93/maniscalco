import {Events, LoadCompanyDetails, UserChangedSearchCompanyFilter, UserSubmittedNewCompany} from "../events";
import {all, call, fork, put, takeLatest} from "redux-saga/effects";
import {Company, db, Session} from "../../dbApi";
import {CompanyNameAlreadyExistsError} from "../../errors/CompanyNameAlreadyExistsError";
import {NavigationHandler} from "../../navigation/NavigationService";
import {
    closeModal, companyCreated,
    companyDetailLoaded,
    companyNameAlreadyExists,
    companySessionsLoaded,
    filteredCompaniesLoaded,
    genericError
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

function* createCompanySaga(event: UserSubmittedNewCompany) {
    try {
        const companyId = yield call(db.createCompany, event.payload);
        yield put(companyCreated());
        NavigationHandler.navigateToCompanyDetails(companyId, true)
    } catch (error) {
        if (error instanceof CompanyNameAlreadyExistsError) {
            yield put(companyNameAlreadyExists());
            return;
        } else {
            console.log(error)
            yield put(genericError());
        }
    }
}

function* watchCreateCompanySaga() {
    yield takeLatest(Events.userSubmittedNewCompany, createCompanySaga);
}

export function* companiesSaga() {
    yield fork(watchLoadFilteredCompanies);
    yield fork(watchLoadCompanyDetail);
    yield fork(watchCreateCompanySaga);
}
