import {Actions, ClearErrors, CloseModal, CompanyNameAlreadyExists, GenericError, OpenModal} from "../action";
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

function modalOpenReducer(state = false, action: OpenModal | CloseModal): boolean {
    switch (action.type) {
        case Actions.openModal:
            return true;
        case Actions.closeModal:
            return false;
        default:
            return state
    }
}

const modalReducer = combineReducers({
    errorMessage: modalErrorReducer,
    isLoading: modalLoadingReducer,
    isOpen: modalOpenReducer,
})


export default modalReducer;
