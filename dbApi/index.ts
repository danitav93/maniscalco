import * as SQLite from 'expo-sqlite';

const sqlLite = SQLite.openDatabase("db.db");


interface CreateCompanyInput {
    name: string;
    mail?: string;
    phone?: string;
}

export interface UpdateCompanyInput extends CreateCompanyInput{
    companyId: string;
}

export interface CreateSessionInput {
    companyId: string;
    creationDate: string;
    price: number;
}

export interface UpdateSessionInput extends CreateSessionInput {
    sessionId: string;
}

export interface Company {
    companyId: string;
    name: string;
    email?: string;
    phoneNumber?: string;
}

export interface SessionItem {
    sessionId: string;
    date: string;
}

export interface Session {
    sessionId: string;
    date: string;
    price: string;
}

export interface CreateGroupInput {
    label: string;
}

export interface Group {
    groupId: string;
    label: string;
    animals: Animal[];
}

export interface CreateAnimalInput {
    label: string;
    notes?: string;
    frontLeftDisease?: Disease;
    frontRightDisease?: Disease;
    rearLeftDisease?: Disease;
    rearRightDisease?: Disease;
    frontLeftCure?: Cure;
    frontRightCure?: Cure;
    rearLeftCure?: Cure;
    rearRightCure?: Cure;
}

export interface UpdateAnimalInput {
    animalId: string;
    label: string;
    notes?: string;
    frontLeftDisease?: Disease;
    frontRightDisease?: Disease;
    rearLeftDisease?: Disease;
    rearRightDisease?: Disease;
    frontLeftCure?: Cure;
    frontRightCure?: Cure;
    rearLeftCure?: Cure;
    rearRightCure?: Cure;
}

export interface Animal {
    animalId: string;
    label: string;
    notes?: string;
    frontLeftDisease?: Disease;
    frontRightDisease?: Disease;
    rearLeftDisease?: Disease;
    rearRightDisease?: Disease;
    frontLeftCure?: Cure;
    frontRightCure?: Cure;
    rearLeftCure?: Cure;
    rearRightCure?: Cure;
}

export enum Disease {
    FLEMMONE_INTERDIGITALE,
    DERMATITE_DIGITALE,
    DERMATITE_INTERFIGITALE,
    LAMINITE,
    ULCERA_SOLEARE
}

export enum Cure {
    // todo
}

class Db {

    /**
     * Create company
     * @param company
     * @return companyId
     */
    createCompany = (company: CreateCompanyInput): string => {
        // todo: return company id
        const argument = "";
        sqlLite.transaction(
            tx => {
                tx.executeSql("insert into items (done, value) values (0, ?)", [argument]);
                tx.executeSql("select * from items", [], (_, { rows }) =>
                    console.log(JSON.stringify(rows))
                );
            },
            () => {
                // todo: choose right error
                throw new Error();
            },
        );
        return "";
    }

    updateCompany = (company: UpdateCompanyInput): void => {
        // todo: implement updateCompany
    }

    getCompaniesBySearchFilter = (searchStr: string): Company[] => {
        // todo: return list by filter
        const company1: Company = {
            companyId: 'id1',
            name: 'Paolo e gina vacche',
            email: 'azionda@maniscalco.it',
            phoneNumber: '3278788372',
        };

        const company2: Company = {
            companyId: 'id2',
            name: 'Federico pavoni',
            email: 'federico@maniscalco.it',
            phoneNumber: '333 3422459',
        };

        return [company1, company2].filter(company => company.name.indexOf(searchStr) === 0);
    }

    getCompanyById = (id: string): Company => {
        //todo return companyDetails by id
        return {
            companyId: '',
            email: '',
            name: '',
            phoneNumber: ''
        }
    }

    createSession = (session: CreateSessionInput): string => {
        // todo: return session id
        return "";
    }

    updateSession = (session: UpdateSessionInput): void => {
        // todo: implement updateCompany
    }

    getSessionsByCompanyId = (companyId: string): SessionItem[] => {
        // todo
        return [];
    }

    getSessionById = (sessionId: string): Session => {
        // todo
        return {
            date: '',
            price: '',
            sessionId: '',
        }
    }

    createGroup = (group: CreateGroupInput): string => {
        // todo group
        return ''
    }

    getGroupsBySessionId = (sessionId: string): Group[] => {
        // todo
        return []
    }

    createAnimal = (animal: CreateAnimalInput): string => {
        // todo
        return ''
    }

    updateAnimal = (animal: UpdateAnimalInput): void => {
        // todo
        return;
    }

}

export const db = new Db();