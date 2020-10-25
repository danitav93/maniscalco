import * as SQLite from 'expo-sqlite';
<<<<<<< HEAD
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
=======
import {CompanyNameAlreadyExistsError} from "../errors/CompanyNameAlreadyExistsError";
>>>>>>> origin/introduce-ui-library

const sqlLite = SQLite.openDatabase("db.db");
const navigation = useNavigation();

export interface CreateCompanyInput {
    name: string;
    email?: string;
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

class Db {


      
    /**
     * Create company
     * @param company
     * @return companyId
     */
<<<<<<< HEAD
    createCompany = (company: CreateCompanyInput): void => {
        // todo: return company id
        
        sqlLite.transaction(
             tx => {
                tx.executeSql("insert into company (name,email,phoneNumber) values (?, ?, ?)", [company.name,company.mail,company.phone], (tx, results) => {
                    console.log('Results', results.rowsAffected);
                    if (results.rowsAffected > 0) {
                      Alert.alert(
                        'Success',
                        'You are Registered Successfully',
                        [
                          {
                            text: 'Ok',
                            onPress: () => navigation.navigate('HomeScreen'),
                          },
                        ],
                        { cancelable: false }
                      );
                    } else alert('Registration Failed');
                }
                );
              });
=======
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
>>>>>>> origin/introduce-ui-library
    }

    updateCompany = (company: UpdateCompanyInput): void => {
        
        sqlLite.transaction((tx) => {
            tx.executeSql(
              'UPDATE table_user set user_name=?, user_contact=? , user_address=? where user_id=?',
              [company.name, company.mail, company.phone],
              (tx, results) => {
                console.log('Results', results.rowsAffected);
                if (results.rowsAffected > 0) {
                  Alert.alert(
                    'Success',
                    'Company updated successfully',
                    [
                      {
                        text: 'Ok',
                        onPress: () => navigation.navigate('HomeScreen'),
                      },
                    ],
                    { cancelable: false }
                  );
                } else alert('Updation Failed');
              }
            );
          });
    }

    getCompaniesBySearchFilter = (searchStr: string): Company[] => {
        // todo: return list by filter
        return [company1, company2].filter(company => company.name.indexOf(searchStr) === 0);
    }

    getCompanyById = (id: string): Company => {
        //todo return companyDetails by id
        return company1
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
