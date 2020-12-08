import {Group} from "../../dbApi";
import {Actions, ClearSessionGroups, SessionGroupsLoaded,} from "../action";
import {combineReducers} from "redux";

function sessionGroupsReducer(state: Group[] = [], action: ClearSessionGroups | SessionGroupsLoaded): Group[] {
    switch (action.type) {
        case Actions.sessionGroupsLoaded:
            return action.payload
        case Actions.clearSessionGroups:
            return []
        default:
            return state
    }
}

const sessionReducer = combineReducers({
    groups: sessionGroupsReducer,
})


export default sessionReducer;
