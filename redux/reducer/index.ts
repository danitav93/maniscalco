import {combineReducers} from "redux";
import companyReducer from "./company";

const rootReducer = combineReducers({
    companies: companyReducer,
});

export type ReduxState = ReturnType<typeof rootReducer>

export default rootReducer;