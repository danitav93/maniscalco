import { NavigationActions } from 'react-navigation';

const config = {
    navigator: undefined
};

export function setNavigator(nav: any) {
    if (nav) {
        config.navigator = nav;
    }
}
export function navigate(routeName: string, params) {
    if (config.navigator && routeName) {
        let action = NavigationActions.navigate({ routeName, params });
        config.navigator!.dispatch(action);
    }
}
export function goBack() {
    if (config.navigator) {
        let action = NavigationActions.back({});
        config.navigator!.dispatch(action);
    }
}
