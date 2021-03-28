import {Company, Session} from "../../dbApi";
import {combineReducers} from "redux";
import {createReducer} from "@reduxjs/toolkit";
import {
    clearCompanyDetails,
    companyDetailLoaded,
    companySessionsLoaded, companyUpdated,
    filteredCompaniesLoaded, sessionDeleted,
} from "../actions";

export interface CompanyDetail {
    company: Company | undefined;
    sessions: Session[];
}

const initialCompanyDetailState: CompanyDetail = {
    company: undefined,
    sessions: [],
}
const companyDetailReducer = createReducer<CompanyDetail>(initialCompanyDetailState, builder => {
    builder.addCase(companyDetailLoaded, (state, action) => {
        state.company = action.payload;
    })
        .addCase(clearCompanyDetails, (state, action) => {
            return initialCompanyDetailState;
        })
        .addCase(companySessionsLoaded, (state, action) => {
            state.sessions = action.payload
        })
        .addCase(companyUpdated, (state, action) => {
            state.company = action.payload
        })
        .addCase(sessionDeleted, (state, action) => {
            state.sessions = state.sessions.filter(session => session.sessionId !== action.payload.sessionId)
        })
})

const filteredCompaniesReducer = createReducer<Company[]>([], builder => {
    builder.addCase(filteredCompaniesLoaded, (state, action) => {
        return action.payload;
    })
});


export const companyReducer = combineReducers({
    filteredCompanies: filteredCompaniesReducer,
    companyDetail: companyDetailReducer,
})
