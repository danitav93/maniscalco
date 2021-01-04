import * as React from 'react';

export const navigationRef = React.createRef();

export const isReadyRef = React.createRef();


function navigate(name: string, params: object) {
    if (isReadyRef.current && navigationRef.current) {
        navigationRef.current.navigate(name, params);
    } else {
        console.error("App is not mounted yet")
    }
}

function goBack() {
    if (isReadyRef.current && navigationRef.current) {
        navigationRef.current.goBack();
    } else {
        console.error("App is not mounted yet")
    }
}

export const NavigationHandler = {

    goBack: () => {
        goBack();
    },
    navigateToCompanyDetails: (companyId: string) => {
        navigate('CompanyDetails', {companyId});
    },
    navigateToSessionDetails: (sessionId: string) => {
        navigate('SessionDetails', {sessionId});
    },
    navigateToEditAnimal: (sessionId: string, animalId: string) => {
        navigate('EditAnimal', {sessionId, animalId});
    },
    navigateToCreateAnimal: (sessionId: string, groupId: string) => {
        navigate('CreateAnimal', {sessionId, groupId});
    }
}
