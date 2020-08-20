import {Company} from "../../dbApi";

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
    userChangedSearchCompanyFilter = 'userChangedSearchCompanyFilter',
}

export const filteredCompaniesLoaded = makeTypedAction<Company[]>(Actions.filteredCompaniesLoaded);
export type FilteredCompaniesLoaded = ReturnType<typeof filteredCompaniesLoaded>;

export const userChangedSearchCompanyFilter = makeTypedAction<string>(Actions.userChangedSearchCompanyFilter);
export type UserChangedSearchCompanyFilter = ReturnType<typeof userChangedSearchCompanyFilter>;