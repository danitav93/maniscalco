import {Group} from "../../dbApi";
import {combineReducers} from "redux";
import {createReducer} from "@reduxjs/toolkit";
import {
    animalCreated,
    animalDeleted,
    animalUpdated,
    clearSessionGroups,
    sessionCreated,
    sessionGroupsLoaded
} from "../actions";
import {userPressedClose, userPressedCreateSession, userSubmittedNewSession} from "../events";
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

interface CreateSessionStore {
    isModalOpen?: boolean;
    isCreatingSession?: boolean;
}


const createSessionReducer = createReducer<CreateSessionStore>({}, (builder => {
    builder.addCase(userPressedCreateSession, (state, _action) => {
        state.isModalOpen = true;
    }).addCase(userSubmittedNewSession, (state, _action) => {
        state.isCreatingSession = true;
    }).addCase(sessionCreated, (state, _action) => {
        state.isModalOpen = false;
    }).addCase(userPressedClose, (state, _action) => {
        state.isModalOpen = false;
        state.isCreatingSession = false;
    })
}))

export const sessionReducer = combineReducers({
    groups: sessionGroupsReducer,
    creation: createSessionReducer,
})
