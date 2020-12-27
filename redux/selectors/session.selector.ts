import {createSelector} from "reselect";
import {ReduxState} from "../reducers";

export const getSessionDetailSelector = (sessionID: string) => createSelector(
    (state: ReduxState) => state.companies.companyDetail.sessions,
    sessions => sessions.find(session => session.sessionId === sessionID)
);
export const sessionGroupsSelector = (state: ReduxState) => state.sessionDetail.groups;
