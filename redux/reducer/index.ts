import {combineReducers} from "redux";
import companyReducer from "./company";
import modalReducer from "./modal";
import sessionReducer from "./session";

const rootReducer = combineReducers({
    companies: companyReducer,
    modal: modalReducer,
    sessionDetail: sessionReducer,
});

export type ReduxState = ReturnType<typeof rootReducer>

export default rootReducer;
