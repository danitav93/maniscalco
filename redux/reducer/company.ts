import {Company} from "../../dbApi";
import {Actions, FilteredCompaniesLoaded} from "../action";
import {combineReducers} from "redux";

const companyReducer = combineReducers({
    filteredCompanies: filteredCompanyReducer,
})

function filteredCompanyReducer(state = [], action: FilteredCompaniesLoaded): Company[] {
    switch (action.type) {
        case Actions.filteredCompaniesLoaded:
            return action.payload
        default: return state
    }
}


export default companyReducer;