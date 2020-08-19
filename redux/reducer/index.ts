import {Actions} from "../action";


const initialState = {
    example: 0
};

export type ReduxState = typeof initialState


interface ExampleAction {
    type: Actions.userPressedButton;
}

function rootReducer(state = initialState, action: ExampleAction): ReduxState {
    switch (action.type) {
        case Actions.userPressedButton:
            return {
                example: state.example + 1
            }
        default: return state
    }
};

export default rootReducer;