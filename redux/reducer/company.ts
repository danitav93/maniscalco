import {Company, Session} from "../../dbApi";
import {
    Actions,
    CompanyDetailLoaded,
    CompanySessionsLoaded,
    FilteredCompaniesLoaded
} from "../action";
import {combineReducers} from "redux";
import {ClearCompanyDetails, Events} from "../events";

export interface CompanyDetail {
    company: Company | undefined;
    sessions: Session[];
}
const initialCompanyDetailState: CompanyDetail = {
    company: undefined,
    sessions: [],
}
const companyDetail = (state = initialCompanyDetailState, action: CompanyDetailLoaded | ClearCompanyDetails | CompanySessionsLoaded): CompanyDetail => {
    switch (action.type) {
        case Actions.companyDetailLoaded:
            return {
                ...state,
                company: action.payload
            };
        case Events.clearCompanyDetails:
            return initialCompanyDetailState;
        case Actions.companySessionsLoaded:
            return {
                ...state,
                sessions: action.payload
            };
        default: return state
    }
}

function filteredCompanies(state = [], action: FilteredCompaniesLoaded): Company[] {
    switch (action.type) {
        case Actions.filteredCompaniesLoaded:
            return action.payload
        default: return state
    }
}

const companyReducer = combineReducers({
    filteredCompanies,
    companyDetail,
})


export default companyReducer;