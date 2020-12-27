import {Animal, Company, Group, Session, UpdateAnimalInput} from "../../dbApi";
import {createAction} from "@reduxjs/toolkit";
import {AnimalsModal} from "../reducers/animal.reducer";


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
    openAnimalModals = 'openAnimalModals',
    closeAnimalModals = 'closeAnimalModals',
    animalDeleted = 'animalDeleted',
    closeModal = 'closeModal',
    animalUpdated = 'animalUpdated',

}

export const filteredCompaniesLoaded = createAction<Company[]>(Actions.filteredCompaniesLoaded);

export const companyDetailLoaded = createAction<Company>(Actions.companyDetailLoaded);

export const companySessionsLoaded = createAction<Session[]>(Actions.companySessionsLoaded);

export const clearCompanyDetails = createAction(Actions.clearCompanyDetails);

export const companyNameAlreadyExists = createAction(Actions.companyNameAlreadyExists);

export const clearErrors = createAction(Actions.clearErrors);

export const genericError = createAction(Actions.genericError);

export const sessionGroupsLoaded = createAction<Group[]>(Actions.sessionGroupsLoaded);

export const clearSessionGroups = createAction(Actions.clearSessionGroups);

export const openAnimalModals = createAction<{ type: AnimalsModal, animal: Animal, groupId: string }>(Actions.openAnimalModals);

export const closeAnimalModals = createAction(Actions.closeAnimalModals);

export const animalDeleted = createAction<{ animalId: string, groupId: string }>(Actions.animalDeleted);

export const closeModal = createAction(Actions.closeModal);

export const animalUpdated = createAction<UpdateAnimalInput>(Actions.animalUpdated);
