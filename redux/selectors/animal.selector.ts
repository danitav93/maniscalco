import {ReduxState} from "../reducers";
import {createSelector} from "reselect";

const animalSelector = (state: ReduxState) => state.animal;

export const editAnimalSelector = createSelector(animalSelector, animal => animal.editAnimal);
export const animalModalSelector = createSelector(animalSelector, animal => animal.animalModal);
export const createAnimalSelector = createSelector(animalSelector, animal => animal.createAnimal);
