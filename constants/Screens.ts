export type RootStackParamList = {
    CompanyList: undefined;
    CompanyDetails: {
        companyId: string
    };
    EditCompany: {
        companyId: string
    };
    SessionDetails: {
        sessionId: string
    };
    EditAnimal: {
        sessionId: string,
        animalIId: string
    },
    CreateAnimal: {
        sessionId: string,
        groupId: string,
    }
    NotFound: undefined;
    NewCompany: undefined,
    NewSession: undefined,
};
