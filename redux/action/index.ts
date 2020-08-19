import {Company} from "../../dbApi";

function makeActionCreator(type: string) {
    return function () {
        return { type }
    }
}

function makeTypedActionCreator<T>(type: string) {
    return function (payload: T) {
        return { type, payload }
    }
}


export enum Actions {
    userPressedButton = 'userPressedButton',
    userPressedButton2 = 'userPressedButton2',
    companiesLoaded = 'companiesLoaded',
}

export const userPressedButton = makeActionCreator(Actions.userPressedButton);
export type UserPressedButton = ReturnType<typeof userPressedButton>;

export const userPressedButton2 = makeActionCreator(Actions.userPressedButton2);
export type UserPressedButton2 = ReturnType<typeof userPressedButton2>;

export const companiesLoaded = makeTypedActionCreator<Company[]>(Actions.companiesLoaded);
export type CompaniesLoaded = ReturnType<typeof companiesLoaded>;