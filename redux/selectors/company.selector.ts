import {ReduxState} from "../reducers";

export const filteredCompaniesSelector = (state: ReduxState) => state.companies.filteredCompanies;

export const companyDetailSelector = (state: ReduxState) => state.companies.companyDetail.company;

export const companySessionsSelector = (state: ReduxState) => state.companies.companyDetail.sessions;

export const companyModalSelector = (state: ReduxState) => state.companies.createCompanyModal;
