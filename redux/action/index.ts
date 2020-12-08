import {Company, Group, Session} from "../../dbApi";


function makeAction(type: string, isLoading?: boolean) {
    return function () {
        return {type, isLoading}
    }
}

function makePayloadAction<T>(type: string, isLoading?: boolean) {
    return function (payload: T) {
        return {type, payload, isLoading}
    }
}

export enum Actions {
    filteredCompaniesLoaded = 'filteredCompaniesLoaded',
    companyDetailLoaded = 'companyDetailLoaded',
    companySessionsLoaded = 'companySessionsLoaded',
    clearCompanyDetails = 'clearCompanyDetails',
    companyNameAlreadyExists = 'companyNameAlreadyExists',
    clearErrors = 'clearErrors',
    genericError = 'genericError',
    sessionGroupsLoaded = 'sessionGroupsLoaded',
    clearSessionGroups = 'clearSessionGroups',

}

export const filteredCompaniesLoaded = makePayloadAction<Company[]>(Actions.filteredCompaniesLoaded, false);
export type FilteredCompaniesLoaded = ReturnType<typeof filteredCompaniesLoaded>;

export const companyDetailLoaded = makePayloadAction<Company>(Actions.companyDetailLoaded, false);
export type CompanyDetailLoaded = ReturnType<typeof companyDetailLoaded>;

export const companySessionsLoaded = makePayloadAction<Session[]>(Actions.companySessionsLoaded, false);
export type CompanySessionsLoaded = ReturnType<typeof companySessionsLoaded>;

export const clearCompanyDetails = makeAction(Actions.clearCompanyDetails);
export type ClearCompanyDetails = ReturnType<typeof clearCompanyDetails>;

export const companyNameAlreadyExists = makeAction(Actions.companyNameAlreadyExists, false);
export type CompanyNameAlreadyExists = ReturnType<typeof companyNameAlreadyExists>;

export const clearErrors = makeAction(Actions.clearErrors, false);
export type ClearErrors = ReturnType<typeof clearErrors>;

export const genericError = makeAction(Actions.genericError, false);
export type GenericError = ReturnType<typeof genericError>;

export const sessionGroupsLoaded = makePayloadAction<Group[]>(Actions.sessionGroupsLoaded, false);
export type SessionGroupsLoaded = ReturnType<typeof sessionGroupsLoaded>;

export const clearSessionGroups =  makeAction(Actions.clearSessionGroups);
export type ClearSessionGroups = ReturnType<typeof clearSessionGroups>;
