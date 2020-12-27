import {Animal} from "../../dbApi";
import {createReducer} from "@reduxjs/toolkit";
import {combineReducers} from "redux";
import {
    userPressedDeleteAnimal,
    userPressedEditAnimal,
    userSubmittedEditedAnimal,
    userSubmittedNewAnimalNotes
} from "../events";
import {animalDeleted, animalUpdated, closeAnimalModals, openAnimalModals} from "../actions";

export enum AnimalsModal {
    NONE,
    ANIMAL_NOTE,
    DELETE_ANIMAL,
}

interface AnimalsModalStore {
    type: AnimalsModal,
    animal?: Animal,
    groupId?: string,
    loading?: boolean,
}

const animalModalReducer = createReducer<AnimalsModalStore>({type: AnimalsModal.NONE}, (builder => {
    builder.addCase(openAnimalModals, (state, action) => {
        state.type = action.payload.type;
        state.animal = action.payload.animal;
        state.groupId = action.payload.groupId;
    })
        .addCase(closeAnimalModals, (state, _action) => {
            state.type = AnimalsModal.NONE;
            state.animal = undefined;
        })
        .addCase(animalDeleted, (state, _action) => {
            state.type = AnimalsModal.NONE;
            state.animal = undefined;
            state.loading = false;
        })
        .addCase(userPressedDeleteAnimal, (state, _action) => {
            state.loading = true;
        })
        .addCase(animalUpdated, (state, _action) => {
            state.loading = false;
            state.type = AnimalsModal.NONE;
            state.animal = undefined;
        })
        .addCase(userSubmittedNewAnimalNotes, (state, _action) => {
            state.loading = true;
        })
}))

interface EditAnimalStore {
    animal?: Animal,
    groupId?: string,
    loading?: boolean,
}

const editAnimalReducer = createReducer<EditAnimalStore>({}, (builder => {
    builder.addCase(userPressedEditAnimal, (state, action) => {
        state.animal = action.payload.animal;
        state.groupId = action.payload.groupId;
    }).addCase(userSubmittedEditedAnimal, (state, action) => {
        state.loading = true;
    }).addCase(animalUpdated, (state, action) => ({}))
}))

export const animalReducer = combineReducers({
    animalModal: animalModalReducer,
    editAnimal: editAnimalReducer,
})
