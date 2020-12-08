import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {forwardRef} from 'react';

import NotFoundScreen from '../screens/NotFoundScreen';
import CompanyListScreen from "../screens/CompanyListScreen";
import {isReadyRef, navigationRef} from "./NavigationService";
import CompanyDetailScreen from "../screens/CompanyDetailScreen";
import {RootStackParamList} from "../constants/Screens";

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export const Navigation = forwardRef((props, ref) => {
    React.useEffect(() => {
        return () => {
            isReadyRef.current = false
        };
    }, []);
    return (
        <NavigationContainer ref={navigationRef} onReady={() => {
            isReadyRef.current = true;
        }}>
            <RootNavigator/>
        </NavigationContainer>
    );
})

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="CompanyList" component={CompanyListScreen}/>
            <Stack.Screen name="NotFound" component={NotFoundScreen} options={{title: 'Oops!'}}/>
            <Stack.Screen name="CompanyDetails" component={CompanyDetailScreen}/>
        </Stack.Navigator>
    );
}
