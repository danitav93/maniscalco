import {combineReducers} from "redux";
import {companyListReducer} from "./companiesList";
import {exampleReducer} from "./example";

const rootReducer = combineReducers({
    companies: companyListReducer,
    example: exampleReducer
});

export type ReduxState = ReturnType<typeof rootReducer>

export default rootReducer;