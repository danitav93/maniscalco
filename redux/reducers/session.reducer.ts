import {Group} from "../../dbApi";
import {combineReducers} from "redux";
import {createReducer} from "@reduxjs/toolkit";
import {animalDeleted, animalUpdated, clearSessionGroups, sessionGroupsLoaded} from "../actions";

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
            .sort((a,b) => a.label.toUpperCase()<b.label.toUpperCase() ? -1 : 1);
    })
})

export const sessionReducer = combineReducers({
    groups: sessionGroupsReducer,
})
