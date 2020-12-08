import {Company, Session} from "../../dbApi";
import {
    Actions,
    ClearCompanyDetails,
    CompanyDetailLoaded,
    CompanySessionsLoaded,
    FilteredCompaniesLoaded
} from "../action";
import {combineReducers} from "redux";

export interface CompanyDetail {
    company: Company | undefined;
    sessions: Session[];
}

const initialCompanyDetailState: CompanyDetail = {
    company: undefined,
    sessions: [],
}
const companyDetailReducer = (state = initialCompanyDetailState, action: CompanyDetailLoaded | ClearCompanyDetails | CompanySessionsLoaded): CompanyDetail => {
    switch (action.type) {
        case Actions.companyDetailLoaded:
            return {
                ...state,
                company: action.payload
            };
        case Actions.clearCompanyDetails:
            return initialCompanyDetailState;
        case Actions.companySessionsLoaded:
            return {
                ...state,
                sessions: action.payload
            };
        default:
            return state
    }
}

function filteredCompaniesReducer(state = [], action: FilteredCompaniesLoaded): Company[] {
    switch (action.type) {
        case Actions.filteredCompaniesLoaded:
            return action.payload
        default:
            return state
    }
}

const companyReducer = combineReducers({
    filteredCompanies: filteredCompaniesReducer,
    companyDetail: companyDetailReducer,
})


export default companyReducer;
