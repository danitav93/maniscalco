import {ReduxState} from "../reducers";

export const editAnimalSelector = (state: ReduxState) => state.animal.editAnimal
export const animalModalSelector = (state: ReduxState) => state.animal.animalModal;
