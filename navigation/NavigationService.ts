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

export const NavigationHandler = {

    navigateToCompanyDetails: (companyId: string) => {
        navigate('CompanyDetails', {companyId});
    },
    navigateToSessionDetails: (sessionId: string) => {
        navigate('SessionDetails', {sessionId});
    }


}
