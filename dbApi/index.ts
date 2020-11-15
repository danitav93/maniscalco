import * as SQLite from 'expo-sqlite';
import {Alert} from 'react-native';
import {DB_NAME} from "../constants/db";
import { array } from 'yup';
import CompanyDetailScreen from '../screens/CompanyDetailScreen';

const sqlLite = SQLite.openDatabase(DB_NAME);

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
    sessionId: string;
    label: string;
}

export interface Group {
    groupId: string;
    sessionId: string;
    label: string;
    animals: Animal[];
}

export interface CreateAnimalInput {
    idGroup: string
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
    idGroup: string
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
    idGroup: string
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


/*
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
*/

class Db {


    /**
     * Create company
     * @param company
     * @return companyId
     */
    createCompany = (company: CreateCompanyInput): Promise<string> => {
        console.log("insert company: ${company}")
        return new Promise((resolve, reject) => {
            sqlLite.transaction(
                tx => {
                    tx.executeSql("insert into company (name,email,phoneNumber) values (?, ?, ?)", [company.name, company.email, company.phone], (tx, results) => {
                            console.log('Results', results);
                            if (results.rowsAffected > 0) {
                                resolve(results.insertId.toString())
                            } else reject();
                        },
                        (tx, error) => {
                            console.log(error);
                            reject();
                            return false;
                        }
                    );
                    console.log("insert completed");
                });
        })

    }

    updateCompany = (company: UpdateCompanyInput): void => {

        sqlLite.transaction(
            tx => {
            tx.executeSql(
                'UPDATE company set name=?, email=? , phoneNumber=? where id=?',
                [company.name, company.email, company.phone, company.companyId],
                (tx, results) => {
                    console.log('Results', results.rowsAffected);
                    if (results.rowsAffected > 0) {
                      console.log("Update succesfully")
                    } else console.log("Update Failed");
                }
            );
        });
    }

    getCompaniesBySearchFilter = (searchStr: string): Company[] => {
        console.log("test")
        let filteredCompanies : Company[] =[]
        sqlLite.transaction(
            tx => {
                tx.executeSql("select * from company where name like ?", ["%"+searchStr+"%"], (tx, results) => {
                        console.log('Results', results);
                        if (results.rows.length > 0) {
                            for (let i = 0; i < results.rows.length; ++i)
                            filteredCompanies.push(results.rows.item(i));
                        } 
                        else console.log("Found 0 companies");
                    },
            
                );
                console.log("search completed");
            });
        return filteredCompanies
        //[company1, company2].filter(company => company.name.indexOf(searchStr) === 0);
    }

    getCompanyById = (id: string): Company => {

        let company : Company = {
            companyId: '',
            name: '',
            email: '',
            phoneNumber: '',
        };
        sqlLite.transaction(
            tx => {
                tx.executeSql("select * from company where id = ?", [id], (tx, results) => {
                        console.log('Results', results);
                        if (results.rows.length > 0) {
                           company = results.rows.item(0);
                        } 
                        else console.log("Company with id: ${id} not found");
                    },
            
                );
                console.log("search completed");
            });
            return company
    }

    createSession = (session: CreateSessionInput): Promise<string> => {
        console.log("insert Session: ${session}")
        return new Promise((resolve, reject) => {
            sqlLite.transaction(
                tx => {
                    tx.executeSql("insert into sessions (idCompany,date,price) values (?, ?, ?)", [session.companyId, new Date(), session.price], (tx, results) => {
                            console.log('Results', results);
                            if (results.rowsAffected > 0) {
                                resolve(results.insertId.toString())
                            } else reject();
                        },
                        (tx, error) => {
                            console.log(error);
                            reject();
                            return false;
                        }
                    );
                    console.log("insert completed");
                });
        })
    }

    updateSession = (session: UpdateSessionInput): void => {
        sqlLite.transaction(
            tx => {
            tx.executeSql(
                'UPDATE sessions set idCompany=?, date=? , price=? where id=?',
                [session.companyId, session.creationDate, session.price, session.sessionId],
                (tx, results) => {
                    console.log('Results', results.rowsAffected);
                    if (results.rowsAffected > 0) {
                      console.log("Update succesfully")
                    } else console.log("Update Failed");
                }
            );
        });
    }

    getSessionsByCompanyId = (companyId: string): SessionItem[] => {
        
        let companySessions : SessionItem[] =[]
        sqlLite.transaction(
            tx => {
                tx.executeSql("select * from sessions where idCompany = ?", [companyId], (tx, results) => {
                        console.log('Results', results);
                        if (results.rows.length > 0) {
                            for (let i = 0; i < results.rows.length; ++i)
                            companySessions.push(results.rows.item(i));
                        } 
                        else console.log("Found 0 sessions");
                    },
            
                );
                console.log("search completed");
            });
        return companySessions
    }

    getSessionById = (sessionId: string): Session => {
        
        let session : Session = {
            date: '',
            price: '',
            sessionId: '',
        }
        sqlLite.transaction(
            tx => {
                tx.executeSql("select * from sessions where id = ?", [sessionId], (tx, results) => {
                        console.log('Results', results);
                        if (results.rows.length > 0) {
                            session = results.rows.item(0);
                        } 
                        else console.log("Session with id: ${id} not found");
                    },
            
                );
                console.log("search completed");
            });
            return session
    }

    createGroup = (group: CreateGroupInput): Promise<string> => {
        
        console.log("insert Group: ${group}")
        return new Promise((resolve, reject) => {
            sqlLite.transaction(
                tx => {
                    tx.executeSql("insert into groups (idSession,description) values (?,?)", [group.sessionId, group.label], (tx, results) => {
                            console.log('Results', results);
                            if (results.rowsAffected > 0) {
                                resolve(results.insertId.toString())
                            } else reject();
                        },
                        (tx, error) => {
                            console.log(error);
                            reject();
                            return false;
                        }
                    );
                    console.log("insert completed");
                });
        })
    }

    getGroupsBySessionId = (sessionId: string): Group[] => {
        
        let sessionGroups : Group[] =[]
        sqlLite.transaction(
            tx => {
                tx.executeSql("select * from groups where idSession = ? ", [sessionId], (tx, results) => {
                        console.log('Results', results);
                        if (results.rows.length > 0) {
                            for (let i = 0; i < results.rows.length; ++i)
                            sessionGroups.push(results.rows.item(i));
                        } 
                        else console.log("Found 0 groups");
                    },
            
                );
                console.log("search completed");
            });
        return sessionGroups
    }

    createAnimal = (animal: CreateAnimalInput): Promise<string> => {
        
        console.log("insert Animal: ${animal}")
        return new Promise((resolve, reject) => {
            sqlLite.transaction(
                tx => {
                    tx.executeSql("insert into animal (idGroup,note,front_left_disease,front_right_disease,rear_left_disease,rear_right_disease,front_left_cure,front_right_cure,rear_left_cure,rear_right_cure) values (?,?,?,?,?,?,?,?,?,?)",
                     [animal.idGroup, animal.notes,animal.frontLeftDisease,animal.frontRightDisease,animal.rearLeftDisease,animal.rearRightDisease,animal.frontLeftCure,animal.frontRightCure,animal.rearLeftCure,animal.rearRightCure], (tx, results) => {
                            console.log('Results', results);
                            if (results.rowsAffected > 0) {
                                resolve(results.insertId.toString())
                            } else reject();
                        },
                        (tx, error) => {
                            console.log(error);
                            reject();
                            return false;
                        }
                    );
                    console.log("insert completed");
                });
        })
    }

    updateAnimal = (animal: UpdateAnimalInput): void => {
        sqlLite.transaction(
            tx => {
            tx.executeSql(
                'UPDATE animal set idGroup = ?, note = ?,front_left_disease= ?,front_right_disease= ?,rear_left_disease= ?,rear_right_disease= ?,front_left_cure= ?,front_right_cure= ?,rear_left_cure= ?,rear_right_cure= ?',
                [animal.idGroup, animal.notes,animal.frontLeftDisease,animal.frontRightDisease,animal.rearLeftDisease,animal.rearRightDisease,animal.frontLeftCure,animal.frontRightCure,animal.rearLeftCure,animal.rearRightCure],
                (tx, results) => {
                    console.log('Results', results.rowsAffected);
                    if (results.rowsAffected > 0) {
                      console.log("Update succesfully")
                    } else console.log("Update Failed");
                }
            );
        });
    }

}

export const db = new Db();
