import {combineReducers} from "redux";
import {companyReducer} from "./company.reducer";
import {animalReducer} from "./animal.reducer";
import {sessionReducer} from "./session.reducer";


const rootReducer = combineReducers({
    companies: companyReducer,
    animal: animalReducer,
    sessionDetail: sessionReducer,
});

export type ReduxState = ReturnType<typeof rootReducer>

export default rootReducer;
