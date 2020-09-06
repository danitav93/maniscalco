import {ActivityIndicator, StyleSheet} from 'react-native';
import { Text, View } from '../components/Themed';
import React, {FC, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ReduxState} from "../redux/reducer";
import { useRoute, RouteProp } from '@react-navigation/native';
import {StackParamsList} from "../navigation";
import {Company, Session} from "../dbApi";
import {clearCompanyDetails, loadCompanyDetails} from "../redux/events";

const companyDetailSelector = (state: ReduxState) => state.companies.companyDetail.company;
const companySessionsSelector = (state: ReduxState) => state.companies.companyDetail.sessions;


const CompanyDetailScreen: FC = () => {

    const dispatch = useDispatch();

    const route = useRoute<RouteProp<StackParamsList, 'CompanyDetails'>>();

    useEffect(() => {
        dispatch(loadCompanyDetails(route.params.companyId));
        return () => {
            dispatch(clearCompanyDetails());
        }
    }, [dispatch])

    const company: Company | undefined = useSelector(companyDetailSelector);

    const sessions: Session[] = useSelector(companySessionsSelector);

    return (
        <>
            <View style={styles.container}>
                {company ? (<View style={styles.resumeContainer}>
                        <Text>Nome: {company.name}</Text>
                        <Text>Email: {company.email ?? ''}</Text>
                        <Text>Telefono: {company.phoneNumber ?? ''}</Text>
                    </View>) :
                    <ActivityIndicator />
                }
                {sessions.length > 0 && (
                    <View style={styles.sessionsContainer}>
                        {sessions.forEach(session => {
                            <Text>{session.date}</Text>
                        })}
                    </View>)
                }
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        padding: 24,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    resumeContainer: {
        display: 'flex',
        top: 200,
    },
    sessionsContainer: {
        backgroundColor: 'red',
        display: 'flex'
    }
});

export default CompanyDetailScreen