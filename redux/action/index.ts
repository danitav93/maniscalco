function makeActionCreator<T>(type: string) {
    return function (payload?: T) {
        return { type, payload }
    }
}


export enum Actions {
    userPressedButton = 'userPressedButton',
}

export const userPressedButtonAction = makeActionCreator(Actions.userPressedButton);