import {Company} from "../../dbApi";
import {Actions, CompaniesLoaded} from "../action";

export function companyListReducer(state = [], action: CompaniesLoaded): Company[] {
    switch (action.type) {
        case Actions.companiesLoaded:
            return action.payload
        default: return state
    }
}