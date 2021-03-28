import * as React from 'react';
import {StackActions} from '@react-navigation/native';

export const navigationRef = React.createRef();

export const isReadyRef = React.createRef();


function navigate(name: string, params: object, replace?: boolean) {
    if (isReadyRef.current && navigationRef.current) {
        if (!replace) {
            navigationRef.current?.navigate(name, params);
        } else {
            navigationRef.current?.dispatch(StackActions.replace(name, params));
        }

    } else {
        console.error("App is not mounted yet")
    }
}


function goBack() {
    if (isReadyRef.current && navigationRef.current) {
        navigationRef.current?.goBack();
    } else {
        console.error("App is not mounted yet")
    }
}

export const NavigationHandler = {

    goBack: () => {
        goBack();
    },
    navigateToCompanyDetails: (companyId: string, replace?: boolean) => {
        navigate('CompanyDetails', {companyId}, replace);
    },
    navigateToEditCompany: (companyId: string, replace?: boolean) => {
        navigate('EditCompany', {companyId}, replace);
    },
    navigateToSessionDetails: (sessionId: string) => {
        navigate('SessionDetails', {sessionId});
    },
    navigateToEditAnimal: (sessionId: string, animalId: string) => {
        navigate('EditAnimal', {sessionId, animalId});
    },
    navigateToCreateAnimal: (sessionId: string, groupId: string) => {
        navigate('CreateAnimal', {sessionId, groupId});
    },
    navigateToNewCompany: () => {
        navigate('NewCompany', {});
    },
    navigateToNewSession: () => {
        navigate('NewSession', {});
    }
}
