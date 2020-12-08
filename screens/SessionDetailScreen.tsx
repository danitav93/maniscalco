import {useDispatch, useSelector} from "react-redux";
import {RouteProp, useRoute} from "@react-navigation/native";
import React, {useEffect, useMemo} from "react";
import {Company, Session} from "../dbApi";
import {StyleSheet, View} from "react-native";
import {Text} from "react-native-elements";
import {PageLoader} from "../components/ui/PageLoader";
import {ReduxState} from "../redux/reducer";
import {createSelector} from 'reselect'
import {loadSessionGroups} from "../redux/events";
import {clearSessionGroups} from "../redux/action";
import {RootStackParamList} from "../constants/Screens";
import ViewPager from '@react-native-community/viewpager';
import {GroupHeader} from "../components/group/GroupHeader";
import {GroupContent} from "../components/group/GroupContent";


const companyDetailSelector = (state: ReduxState) => state.companies.companyDetail.company;
const getSessionDetailSelector = (sessionID: string) => createSelector(
    (state: ReduxState) => state.companies.companyDetail.sessions,
    sessions => sessions.find(session => session.sessionId === sessionID)
);
const sessionGroupsSelector = (state: ReduxState) => state.sessionDetail.groups;

const SessionDetailScreen = () => {

    const dispatch = useDispatch();

    const company: Company = useSelector(companyDetailSelector)!;

    const route = useRoute<RouteProp<RootStackParamList, 'SessionDetails'>>();

    const sessionId = route.params.sessionId;

    const sessionDetailSelector = useMemo(() => getSessionDetailSelector(sessionId), [sessionId]);

    const session: Session = useSelector(sessionDetailSelector)!;

    const groups = useSelector(sessionGroupsSelector);

    useEffect(() => {
        dispatch(loadSessionGroups(session.sessionId));
        return () => {
            dispatch(clearSessionGroups());
        }
    }, [dispatch])

    if (!groups.length) {
        return <PageLoader/>;
    }

    return (
        <View style={styles.container}>
            <View style={styles.resumeContainer}>
                <Text style={styles.title}>Sessione del {session.date}</Text>
                <Text style={styles.price}>Prezzo {session.price} {'\u20AC'}</Text>
                <Text style={styles.subtitle}>{company.name}</Text>
            </View>
            <ViewPager style={styles.viewPager} initialPage={0}>
                {groups.map((group, idx) => (
                    <View key={group.groupId}>
                        <GroupHeader hideLeft={idx === 0} hideRight={idx === groups.length - 1} label={group.label}
                                     numberOfAnimals={group.animals.length}/>
                        <GroupContent animals={group.animals}/>
                    </View>
                ))}

            </ViewPager>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        paddingTop: 24,
        paddingLeft: 24,
        paddingRight: 24,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'normal',
    },
    resumeContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'flex-end',
        marginBottom: 20
    },
    viewPager: {
        flex: 1,
    },
});

export default SessionDetailScreen;
