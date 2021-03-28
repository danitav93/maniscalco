import {Animal, CreateAnimalInput, CreateCompanyInput, CreateSessionInput, UpdateAnimalInput} from "../../dbApi";
import {createAction} from "@reduxjs/toolkit";

export enum Events {
    userChangedSearchCompanyFilter = 'userChangedSearchCompanyFilter',
    loadCompanyDetails = 'loadCompanyDetails',
    userSubmittedNewCompany = 'userSubmittedNewCompany',
    loadSessionGroups = 'loadSessionGroups',
    userSubmittedNewSession = 'userSubmittedNewSession',
    userPressedDeleteAnimal = 'userPressedDeleteAnimal',
    userPressedEditAnimal = 'userPressedEditAnimal',
    userSubmittedEditedAnimal = 'userSubmittedEditedAnimal',
    userSubmittedNewAnimalNotes = 'userSubmittedNewAnimalNotes',
    userPressedCreateSession = 'userPressedCreateSession',
    userPressedClose = 'userPressedClose',
    userSubmittedNewAnimal = 'userSubmittedNewAnimal'
}


export const userChangedSearchCompanyFilter = createAction<string>(Events.userChangedSearchCompanyFilter);
export type UserChangedSearchCompanyFilter = ReturnType<typeof userChangedSearchCompanyFilter>;

export const loadCompanyDetails = createAction<string>(Events.loadCompanyDetails);
export type LoadCompanyDetails = ReturnType<typeof loadCompanyDetails>;

export const userSubmittedNewCompany = createAction<CreateCompanyInput>(Events.userSubmittedNewCompany);
export type UserSubmittedNewCompany = ReturnType<typeof userSubmittedNewCompany>;

export const loadSessionGroups = createAction<string>(Events.loadSessionGroups);
export type LoadSessionGroups = ReturnType<typeof loadSessionGroups>;

export const userSubmittedNewSession = createAction<CreateSessionInput>(Events.userSubmittedNewSession);
export type UserSubmittedNewSession = ReturnType<typeof userSubmittedNewSession>;

export const userPressedDeleteAnimal = createAction<{ animalId: string, groupId: string }>(Events.userPressedDeleteAnimal);
export type UserPressedDeleteAnimal = ReturnType<typeof userPressedDeleteAnimal>;

export const userPressedEditAnimal = createAction<{ animal: Animal, groupId: string }>(Events.userPressedEditAnimal);

export const userSubmittedEditedAnimal = createAction<{ sessionId: string, newAnimal: UpdateAnimalInput }>(Events.userSubmittedEditedAnimal);
export type UserSubmittedEditedAnimal = ReturnType<typeof userSubmittedEditedAnimal>;

export const userSubmittedNewAnimalNotes = createAction<UpdateAnimalInput> (Events.userSubmittedNewAnimalNotes);
export type UserSubmittedNewAnimalNotes = ReturnType<typeof userSubmittedNewAnimalNotes>;

export const userPressedCreateSession = createAction(Events.userPressedCreateSession);

export const userPressedClose = createAction(Events.userPressedClose);

export const userSubmittedNewAnimal = createAction<CreateAnimalInput>(Events.userSubmittedNewAnimal);
export type UserSubmittedNewAnimal = ReturnType<typeof userSubmittedNewAnimal>;
