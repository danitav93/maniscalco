import {Animal, Company, Group, Session, UpdateAnimalInput} from "../../dbApi";
import {createAction} from "@reduxjs/toolkit";
import {AnimalsModal} from "../reducers/animal.reducer";

export enum Actions {
    filteredCompaniesLoaded = 'filteredCompaniesLoaded',
    companyCreated = 'companyCreated',
    companyUpdated = 'companyUpdated',
    companyDetailLoaded = 'companyDetailLoaded',
    companySessionsLoaded = 'companySessionsLoaded',
    clearCompanyDetails = 'clearCompanyDetails',
    clearErrors = 'clearErrors',
    sessionGroupsLoaded = 'sessionGroupsLoaded',
    clearSessionGroups = 'clearSessionGroups',
    openAnimalModals = 'openAnimalModals',
    closeAnimalModals = 'closeAnimalModals',
    animalDeleted = 'animalDeleted',
    animalUpdated = 'animalUpdated',
    sessionCreated = 'sessionCreated',
    sessionDeleted = 'sessionDeleted',
    animalCreated = 'animalCreated',
}

export const filteredCompaniesLoaded = createAction<Company[]>(Actions.filteredCompaniesLoaded);

export const companyCreated = createAction(Actions.companyCreated);

export const companyUpdated = createAction<Company>(Actions.companyUpdated);

export const companyDetailLoaded = createAction<Company>(Actions.companyDetailLoaded);

export const companySessionsLoaded = createAction<Session[]>(Actions.companySessionsLoaded);

export const clearCompanyDetails = createAction(Actions.clearCompanyDetails);

export const clearErrors = createAction(Actions.clearErrors);

export const sessionGroupsLoaded = createAction<Group[]>(Actions.sessionGroupsLoaded);

export const clearSessionGroups = createAction(Actions.clearSessionGroups);

export const openAnimalModals = createAction<{ type: AnimalsModal, animal: Animal, groupId: string }>(Actions.openAnimalModals);

export const closeAnimalModals = createAction(Actions.closeAnimalModals);

export const animalDeleted = createAction<{ animalId: string, groupId: string }>(Actions.animalDeleted);

export const animalUpdated = createAction<UpdateAnimalInput>(Actions.animalUpdated);

export const sessionCreated = createAction(Actions.sessionCreated);

export const animalCreated = createAction<{ animal: Animal; groupId: string }>(Actions.animalCreated);

export const sessionDeleted = createAction<{sessionId: string}>(Actions.sessionDeleted);
