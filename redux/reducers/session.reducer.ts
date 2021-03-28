import {Group} from "../../dbApi";
import {combineReducers} from "redux";
import {createReducer} from "@reduxjs/toolkit";
import {
    animalCreated,
    animalDeleted,
    animalUpdated,
    clearSessionGroups,
    sessionDeleted,
    sessionGroupsLoaded
} from "../actions";
import {
    closeModal,
    userPressedClose,
    userPressedDeleteSession,
} from "../events";
import {animalSort} from "../../utils/sorts";

const sessionGroupsReducer = createReducer<Group[]>([], builder => {
    builder.addCase(sessionGroupsLoaded, (state, action) => {
        return action.payload
    })
        .addCase(clearSessionGroups, (_state, _action) => {
            return []
        })
        .addCase(animalDeleted, (state, action) => {
            const group = state.find(group => group.groupId === action.payload.groupId)!;
            group.animals = group.animals.filter(animal => animal.animalId !== action.payload.animalId);
        }).addCase(animalUpdated, (state, action) => {
        const {groupId, ...animalFields} = action.payload;
        const group = state.find(group => group.groupId === groupId)!;
        group.animals = [...group.animals.filter(animal => animal.animalId !== animalFields.animalId), animalFields]
            .sort(animalSort);
    }).addCase(animalCreated, (state, action) => {
        const group = state.find(group => group.groupId === action.payload.groupId)!;
        group.animals = [...group.animals, action.payload.animal].sort(animalSort);
    })
})

const deleteSessionModalReducer = createReducer<{ sessionId?: string }>({}, (builder => {
    builder.addCase(userPressedDeleteSession, (state, action) => {
        state.sessionId = action.payload.sessionId;
    }).addCase(sessionDeleted, (state, _action) => {
        state.sessionId = undefined;
    }).addCase(userPressedClose, (state, _action) => {
        state.sessionId = undefined;
    }).addCase(closeModal, (state, _action) => {
        state.sessionId = undefined;
    })
}))

export const sessionReducer = combineReducers({
    groups: sessionGroupsReducer,
    deleteModal: deleteSessionModalReducer,
})
