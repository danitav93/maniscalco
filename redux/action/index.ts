import {Company, Session} from "../../dbApi";

function makeAction(type: string) {
    return function () {
        return { type }
    }
}

function makeTypedAction<T>(type: string) {
    return function (payload: T) {
        return { type, payload }
    }
}


export enum Actions {
    filteredCompaniesLoaded = 'filteredCompaniesLoaded',
    companyDetailLoaded = 'companyDetailLoaded',
    companySessionsLoaded = 'companySessionsLoaded'
}

export const filteredCompaniesLoaded = makeTypedAction<Company[]>(Actions.filteredCompaniesLoaded);
export type FilteredCompaniesLoaded = ReturnType<typeof filteredCompaniesLoaded>;

export const companyDetailLoaded = makeTypedAction<Company>(Actions.companyDetailLoaded);
export type CompanyDetailLoaded = ReturnType<typeof companyDetailLoaded>;

export const companySessionsLoaded = makeTypedAction<Session[]>(Actions.companySessionsLoaded);
export type CompanySessionsLoaded = ReturnType<typeof companySessionsLoaded>;