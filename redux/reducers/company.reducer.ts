import {Company, Session} from "../../dbApi";
import {combineReducers} from "redux";
import {createReducer} from "@reduxjs/toolkit";
import {userPressedCreateCompany, userSubmittedNewCompany} from "../events";
import {
    clearCompanyDetails,
    clearErrors,
    closeModal,
    companyDetailLoaded,
    companyNameAlreadyExists,
    companySessionsLoaded,
    filteredCompaniesLoaded,
    genericError
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
})

const filteredCompaniesReducer = createReducer<Company[]>([], builder => {
    builder.addCase(filteredCompaniesLoaded, (state, action) => {
        return action.payload;
    })
});


interface CreateCompanyRedux {
    isOpen?: boolean;
    isLoading?: boolean;
    error?: string;
}

const createCompanyModalReducer = createReducer<CreateCompanyRedux>({}, (builder => {
    builder.addCase(userSubmittedNewCompany, (state, action) => {
        state.isLoading = true;
    })
        .addCase(companyNameAlreadyExists, (state, action) => {
            state.isLoading = false;
            state.error = "Nome dell'azienda non disponibile";
        })
        .addCase(genericError, (state, action) => {
            state.isLoading = false;
            state.error = "Si è verificato un errore imprevisto";
        })
        .addCase(clearErrors, (state, action) => {
            state.isLoading = false;
            state.error = undefined;
        })
        .addCase(userPressedCreateCompany, (state, action) => {
            state.isOpen = true
        })
        .addCase(closeModal, (state, action) => {
            state.isOpen = false
        })
}))

export const companyReducer = combineReducers({
    filteredCompanies: filteredCompaniesReducer,
    companyDetail: companyDetailReducer,
    createCompanyModal: createCompanyModalReducer,
})
