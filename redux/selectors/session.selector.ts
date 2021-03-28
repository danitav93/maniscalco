import {createSelector} from "reselect";
import {ReduxState} from "../reducers";

export const getSessionDetailSelector = (sessionID: string) => createSelector(
    (state: ReduxState) => state.companies.companyDetail.sessions,
    sessions => sessions.find(session => session.sessionId === sessionID)
);
const sessionsSelector = (state: ReduxState) => state.sessions;
export const sessionGroupsSelector = createSelector(sessionsSelector, sessions => sessions.groups);
export const createSessionSelector = createSelector(sessionsSelector, sessions => sessions.creation);
export const deleteSessionModalStateSelector = createSelector(sessionsSelector, sessions => sessions.deleteModal);
