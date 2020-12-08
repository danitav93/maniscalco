import {CreateCompanyInput, CreateSessionInput} from "../../dbApi";

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
    userSubmittedNewCompany = 'userSubmittedNewCompany',
    loadSessionGroups = 'loadSessionGroups',
    userSubmittedNewSession = 'userSubmittedNewSession',
}


export const userChangedSearchCompanyFilter = makePayloadEvent<string>(Events.userChangedSearchCompanyFilter, true);
export type UserChangedSearchCompanyFilter = ReturnType<typeof userChangedSearchCompanyFilter>;

export const loadCompanyDetails = makePayloadEvent<string>(Events.loadCompanyDetails, true);
export type LoadCompanyDetails = ReturnType<typeof loadCompanyDetails>;

export const userSubmittedNewCompany = makePayloadEvent<CreateCompanyInput>(Events.userSubmittedNewCompany, true);
export type UserSubmittedNewCompany = ReturnType<typeof userSubmittedNewCompany>;

export const loadSessionGroups = makePayloadEvent<string>(Events.loadSessionGroups, true);
export type LoadSessionGroups = ReturnType<typeof loadSessionGroups>;

export const userSubmittedNewSession = makePayloadEvent<CreateSessionInput>(Events.userSubmittedNewSession, true);
export type UserSubmittedNewSession = ReturnType<typeof userSubmittedNewSession>;
