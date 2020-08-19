import {Actions, UserPressedButton} from "../action";

export function exampleReducer(state = 0, action: UserPressedButton): number {
    switch (action.type) {
        case Actions.userPressedButton:
            return state +1;
        default: return state
    }
}