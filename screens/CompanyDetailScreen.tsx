import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {FC, useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ReduxState} from "../redux/reducer";
import {RouteProp, useRoute} from '@react-navigation/native';
import {StackParamsList} from "../navigation";
import {Company, Session} from "../dbApi";
import {clearCompanyDetails, loadCompanyDetails} from "../redux/events";
import {ListItem, Text} from 'react-native-elements';
import {PageLoader} from "../components/ui/PageLoader";
import {Email} from "../components/ui/Email";
import {PhoneNumber} from "../components/ui/PhoneNumber";


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

    const onSessionSelected = useCallback((session: Session) => () => {
        console.log(session.date + ' clicked')
    }, [])

    const RenderItem = useCallback(({item}: { item: Session }) => (
        <TouchableOpacity onPress={onSessionSelected(item)}>
            <ListItem style={{padding: StyleSheet.hairlineWidth}} bottomDivider>
                <ListItem.Content>
                    <ListItem.Title>{item.date}</ListItem.Title>
                </ListItem.Content>
            </ListItem>
        </TouchableOpacity>
    ), [onSessionSelected])

    const keyExtractor = (item: Session) => item.sessionId

    if (!company || !sessions) {
        return <PageLoader/>;
    }

    return (
        <View style={styles.container}>
            <View style={styles.resumeContainer}>
                <Text style={styles.title}>{company.name}</Text>
                <View>
                    <Email email={company?.email} iconSize={10}/>
                    <PhoneNumber phone={company?.phoneNumber} iconSize={10}/>
                </View>
            </View>
            <Text style={styles.listTitle}>Diario delle sessioni</Text>
            {(sessions && sessions.length) ? (
                <FlatList
                    data={sessions}
                    renderItem={RenderItem}
                    keyExtractor={keyExtractor}
                />) : (<Text style={styles.emptyListTitle}>Non è stata ancora creata alcuna sessione</Text>)
            }
        </View>
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
        fontSize: 22,
        fontWeight: 'bold',
    },
    listTitle: {
        fontSize: 18,
        marginBottom: 10
    },
    resumeContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    sessionsContainer: {
        backgroundColor: 'red',
        display: 'flex'
    },
    emptyListTitle: {
        fontSize: 18,
    }
});

export default CompanyDetailScreen
