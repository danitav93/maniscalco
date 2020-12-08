import {CreateCompanyInput} from "../../dbApi";

function makeEvent(type: string, isLoading?: boolean) {
    return function () {
        return {type, isLoading}
    }
}

function makePayloadEvent<T>(type: string, isLoading?: boolean) {
    return function (payload: T) {
        return {type, payload, isLoading}
    }
}

export enum Events {
    userChangedSearchCompanyFilter = 'userChangedSearchCompanyFilter',
    loadCompanyDetails = 'loadCompanyDetails',
    clearCompanyDetails = 'clearCompanyDetails',
    userSubmittedNewCompany = 'userSubmittedNewCompany',
}


export const userChangedSearchCompanyFilter = makePayloadEvent<string>(Events.userChangedSearchCompanyFilter, true);
export type UserChangedSearchCompanyFilter = ReturnType<typeof userChangedSearchCompanyFilter>;

export const loadCompanyDetails = makePayloadEvent<string>(Events.loadCompanyDetails, true);
export type LoadCompanyDetails = ReturnType<typeof loadCompanyDetails>;

export const clearCompanyDetails = makeEvent(Events.clearCompanyDetails, true);
export type ClearCompanyDetails = ReturnType<typeof clearCompanyDetails>;

export const userSubmittedNewCompany = makePayloadEvent<CreateCompanyInput>(Events.userSubmittedNewCompany, true);
export type UserSubmittedNewCompany = ReturnType<typeof userSubmittedNewCompany>;
