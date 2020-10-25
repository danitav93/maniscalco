import * as SQLite from 'expo-sqlite';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const sqlLite = SQLite.openDatabase("db.db");
const navigation = useNavigation();

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

export interface CompanyItem {
    companyId: string;
    name: string;
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

    getCompaniesBySearchFilter = (searchStr: string): CompanyItem[] => {
        // todo: return list by filter
        return [{
            companyId: 'id1',
            name: 'Pippo er magnone',
        }];
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