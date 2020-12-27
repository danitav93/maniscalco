export type RootStackParamList = {
    CompanyList: undefined;
    CompanyDetails: {
        companyId: string
    };
    SessionDetails: {
        sessionId: string
    };
    EditAnimal: {
        sessionId: string,
        animalIId: string
    },
    NotFound: undefined;
};
