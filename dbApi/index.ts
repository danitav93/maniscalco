import * as SQLite from 'expo-sqlite';

const sqlLite = SQLite.openDatabase("db.db");


export interface CreateCompanyInput {
    name: string;
    email?: string;
    phone?: string;
}

export interface UpdateCompanyInput extends CreateCompanyInput {
    companyId: string;
}

export interface CreateSessionInput {
    companyId: string;
    date: string;
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
    sessionId: string;
    groupId: string;
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
    groupId: string;
    animalId: string;
    label: string;
    notes?: string;
    frontLeftDisease: Disease | null;
    frontRightDisease: Disease | null;
    rearLeftDisease: Disease | null;
    rearRightDisease: Disease | null;
    frontLeftCure: Cure | null;
    frontRightCure: Cure | null;
    rearLeftCure: Cure | null;
    rearRightCure: Cure | null;
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
    FASCIATURA,
    SOLETTA,
}

//todo remove, these are just stub data
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
const company3: Company = {
    companyId: 'id3',
    name: 'Paolo e gina mucche',
    email: 'dfsfaf@maniscalco.it',
    phoneNumber: '33333333333',
};
const session1: Session = {
    date: '24/05/2020',
    sessionId: 'id1',
    price: '34'
}
const session2: Session = {
    date: '12/09/2020',
    sessionId: 'id2',
    price: '33'
}
const session3: Session = {
    date: '01/12/2021',
    sessionId: 'id3',
    price: '32'
}

const animal1: Animal = {
    animalId: 'id1',
    label: 'animale1',
    notes: 'note1',
    rearLeftDisease: Disease.FLEMMONE_INTERDIGITALE,
    rearLeftCure: Cure.FASCIATURA,
    frontLeftDisease: Disease.DERMATITE_DIGITALE,
    frontRightDisease: Disease.DERMATITE_INTERFIGITALE,
    frontRightCure: Cure.FASCIATURA,
    rearRightCure: Cure.SOLETTA,
    rearRightDisease: Disease.DERMATITE_INTERFIGITALE,
    frontLeftCure: undefined,
}
const animal2: Animal = {
    ...animal1,
    animalId: 'id2',
    label: 'animale2',
    notes: 'note2',
}
const animal3: Animal = {
    ...animal1,

    animalId: 'id3',
    label: 'animale3',
    notes: 'note3',
}
const animal4: Animal = {
    ...animal1,

    animalId: 'id4',
    label: 'animale4',
    notes: 'note4',
}
const animal5: Animal = {
    ...animal1,

    animalId: 'id5',
    label: 'animale5',
    notes: 'note5',
}
const animal6: Animal = {
    ...animal1,

    animalId: 'id6',
    label: 'animale6',
    notes: 'note6',
}

const animal7: Animal = {
    ...animal1,

    animalId: 'id7',
    label: 'animale7',
    notes: 'note7',
}


const animal8: Animal = {
    ...animal1,

    animalId: 'id8',
    label: 'animale8',
    notes: 'note8',
}


const group1: Group = {
    animals: [animal1, animal2, animal3, animal4, animal5, animal6, animal7, animal8],
    groupId: 'id1',
    label: '1',
}

const group2: Group = {
    animals: [],
    groupId: 'id2',
    label: '2',
}

const group3: Group = {
    animals: [],
    groupId: 'id3',
    label: '3',
}

class Db {

    /**
     * Create company
     * @param company
     * @return companyId
     */
    createCompany = (company: CreateCompanyInput): string => {
        //throw new CompanyNameAlreadyExistsError();
        // todo: return company id
        const argument = "";
        /*sqlLite.transaction(
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
        );*/
        return "aooo";
    }

    updateCompany = (company: UpdateCompanyInput): void => {
        // todo: implement updateCompany
    }

    getCompaniesBySearchFilter = (searchStr: string): Company[] => {
        // todo: return list by filter
        return [company1, company2, company3].filter(company => company.name.indexOf(searchStr) === 0);
    }

    getCompanyById = (id: string): Company => {
        //todo return companyDetails by id
        return company1
    }

    createSession = (session: CreateSessionInput): string => {
        // todo: return session id
        return session1.sessionId;
    }

    updateSession = (session: UpdateSessionInput): void => {
        // todo: implement updateCompany
    }

    getSessionsByCompanyId = (companyId: string): SessionItem[] => {
        // todo
        return [session1, session2, session3];
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
        return [group1, group2, group3];
    }

    createAnimal = (animal: CreateAnimalInput): string => {
        // todo
        return 'newId'
    }

    updateAnimal = (animal: UpdateAnimalInput): void => {
        // todo
        return;
    }

    deleteAnimal = (animalId: string): void => {
        //todo
        return;
    }

}

export const db = new Db();
