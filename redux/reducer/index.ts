import {combineReducers} from "redux";
import companyReducer from "./company";
import modalReducer from "./modal";

const rootReducer = combineReducers({
    companies: companyReducer,
    modal: modalReducer,
});

export type ReduxState = ReturnType<typeof rootReducer>

export default rootReducer;
