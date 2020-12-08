import {Actions, ClearErrors, CompanyNameAlreadyExists, GenericError} from "../action";
import {combineReducers} from "redux";


type ErrorAction = CompanyNameAlreadyExists | ClearErrors | GenericError;

function modalErrorReducer(state = null, action: ErrorAction): string | null {
    switch (action.type) {
        case Actions.companyNameAlreadyExists:
            return "Nome dell'azienda non disponibile";
        case Actions.genericError:
            return "Si è verificato un errore imprevisto";
        case Actions.closeModal:
        case Actions.clearErrors:
            return null
        default:
            return state
    }
}

function modalLoadingReducer(state = false, action: { isLoading: boolean }): boolean {
    return action.isLoading ?? state;
}



const modalReducer = combineReducers({
    errorMessage: modalErrorReducer,
    isLoading: modalLoadingReducer,
})


export default modalReducer;
