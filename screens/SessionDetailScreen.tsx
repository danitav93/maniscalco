import {useDispatch, useSelector} from "react-redux";
import {RouteProp, useRoute} from "@react-navigation/native";
import React, {useCallback, useEffect, useMemo, useState} from "react";
import {Company, Session} from "../dbApi";
import * as ReactNative from "react-native";
import {StyleSheet, View} from "react-native";
import {Text} from "react-native-elements";
import {PageLoader} from "../components/ui/PageLoader";
import {loadSessionGroups} from "../redux/events";
import {RootStackParamList} from "../constants/Screens";
import ViewPager, {ViewPagerOnPageSelectedEventData} from '@react-native-community/viewpager';
import {GroupHeader} from "../components/group/GroupHeader";
import {GroupContent} from "../components/group/GroupContent";
import {getSessionDetailSelector, sessionGroupsSelector} from "../redux/selectors/session.selector";
import {clearSessionGroups} from "../redux/actions";
import {companyDetailSelector} from "../redux/selectors/company.selector";
import {FloatingCreateButton} from "../components/ui/FloatingButton";
import {useCreateAnimal} from "../hooks/useCreateAnimal";

const SessionDetailScreen = () => {

    const dispatch = useDispatch();

    const company: Company = useSelector(companyDetailSelector)!;

    const route = useRoute<RouteProp<RootStackParamList, 'SessionDetails'>>();

    const sessionId = route.params.sessionId;

    const sessionDetailSelector = useMemo(() => getSessionDetailSelector(sessionId), [sessionId]);

    const session: Session = useSelector(sessionDetailSelector)!;

    const groups = useSelector(sessionGroupsSelector);

    const {navigateToCreateAnimal} = useCreateAnimal();

    useEffect(() => {
        dispatch(loadSessionGroups(session.sessionId));
        return () => {
            dispatch(clearSessionGroups());
        }
    }, [dispatch])

    const [groupSelected, setGroupSelected] = useState(0);
    const onPageSelected = useCallback((e: ReactNative.NativeSyntheticEvent<ViewPagerOnPageSelectedEventData>) => {
        setGroupSelected(e.nativeEvent.position);
    }, []);

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
            <ViewPager style={styles.viewPager} initialPage={0} onPageSelected={onPageSelected}>
                {groups.map((group, idx) => (
                    <View key={group.groupId}>
                        <GroupHeader hideLeft={idx === 0} hideRight={idx === groups.length - 1} label={group.label}
                                     numberOfAnimals={group.animals.length}/>
                        <GroupContent animals={group.animals} groupId={group.groupId}/>
                    </View>
                ))}
            </ViewPager>
            <FloatingCreateButton onPress={navigateToCreateAnimal(groups[groupSelected].groupId)} text={"Aggiungi un animale"}/>
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
