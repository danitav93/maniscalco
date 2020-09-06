function makeEvent(type: string) {
    return function () {
        return { type }
    }
}

function makeTypedEvent<T>(type: string) {
    return function (payload: T) {
        return { type, payload }
    }
}

export enum Events {
    userChangedSearchCompanyFilter = 'userChangedSearchCompanyFilter',
    loadCompanyDetails = 'loadCompanyDetails',
    clearCompanyDetails = 'clearCompanyDetails',
}


export const userChangedSearchCompanyFilter = makeTypedEvent<string>(Events.userChangedSearchCompanyFilter);
export type UserChangedSearchCompanyFilter = ReturnType<typeof userChangedSearchCompanyFilter>;

export const loadCompanyDetails = makeTypedEvent<string>(Events.loadCompanyDetails);
export type LoadCompanyDetails = ReturnType<typeof loadCompanyDetails>;

export const clearCompanyDetails = makeEvent(Events.clearCompanyDetails);
export type ClearCompanyDetails = ReturnType<typeof clearCompanyDetails>;