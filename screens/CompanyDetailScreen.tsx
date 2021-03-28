import {FlatList, Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {FC, useCallback, useEffect, useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RouteProp, useRoute} from '@react-navigation/native';
import {Company, Session} from "../dbApi";
import {loadCompanyDetails, userPressedDeleteSession} from "../redux/events";
import {Text} from 'react-native-elements';
import {PageLoader} from "../components/ui/PageLoader";
import {Email} from "../components/ui/Email";
import {PhoneNumber} from "../components/ui/PhoneNumber";
import {RootStackParamList} from "../constants/Screens";
import {NavigationHandler} from "../navigation/NavigationService";
import {Button} from "../components/ui/Button";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers";
import {sessionSchema} from "../schemas/schema";
import {clearCompanyDetails} from "../redux/actions";
import {companyDetailSelector, companySessionsSelector} from "../redux/selectors/company.selector";
import {AppBackground} from "../components/ui/AppBackground";
import {useTheme} from "../hooks/useTheme";
import {IconButton} from "../components/ui/IconButton";
import {DeleteSessionModal} from "../components/session/DeleteSessionModal";
import {DataRowLabel} from "../components/ui/typography/DataRowLabel";
import {ScreenTitle} from "../components/ui/typography/ScreenTitle";
import {HeaderListLabel} from "../components/ui/typography/HeaderListLabel";


const onNewSessionPress = ()=>{
    NavigationHandler.navigateToNewSession();
};

const CompanyDetailScreen: FC = () => {

    const dispatch = useDispatch();

    const route = useRoute<RouteProp<RootStackParamList, 'CompanyDetails'>>();

    useEffect(() => {
        dispatch(loadCompanyDetails(route.params.companyId));
        return () => {
            dispatch(clearCompanyDetails());
        }
    }, [dispatch])

    const company: Company | undefined = useSelector(companyDetailSelector);

    const sessions: Session[] = useSelector(companySessionsSelector);

    const onSessionSelected = useCallback((session: Session) => () => {
        NavigationHandler.navigateToSessionDetails(session.sessionId);
    }, [])

    const keyExtractor = (item: Session) => item.sessionId

    const methods = useForm({
        mode: "onSubmit",
        resolver: yupResolver(sessionSchema),
    });

    const theme = useTheme();

    const styles = useMemo(() =>
        StyleSheet.create({
            mainContainer: {
                width: '100%',
                flex: 1,
                padding: 20,
                justifyContent: 'space-between',
                alignItems: 'flex-end',
            },
            topContainer: {
                alignSelf: 'stretch',
                flexShrink: 1,
                marginBottom: 20,
            },
            listTitle: {
                fontWeight: "500",
                fontSize: 36,
                lineHeight: 42,
                marginTop: 40,
                marginBottom: 35
            },
            titleContainer: {
                flexDirection: 'row',
            },
            emptyListTitle: {
                fontSize: 18,
            },
            titleAndInfoContainer: {
                alignSelf: 'stretch',
                justifyContent: 'space-between',
                marginLeft: 20,
                flexShrink: 1
            },
            infoContainer: {
                flexDirection: 'row',
                justifyContent: 'space-between'
            },
            headerListRow: {
                flexDirection: 'row',
                marginBottom: 14,
                alignItems: 'flex-end'
            },
            dataHeader: {
                width: 200,
                paddingLeft: 20,
            },
            dataItemColumn: {
                width: 200,
                paddingLeft: 20,
            },
            sessionItemStyle: {
                borderWidth: 1,
                borderColor: theme.colors?.primaryLight,
                borderRadius: 8,
                height: 60,
                marginTop: 4,
                backgroundColor: theme.colors?.secondary,
                justifyContent: 'space-evenly',
                paddingTop: 10,
                paddingBottom: 10,
            },
            dataRow: {
                flexDirection: 'row',
                alignItems: 'center'
            },
            itemColumnsContainer: {
                flexDirection: 'row',
                flex: 1,
            },
            phoneNumber: {
                marginLeft: 15,
            },
            itemControlsContainer: {
                flexDirection: 'row',
            }
        }), [theme])

    const onDeleteSessionPress = useCallback((sessionId: string) => () => {
        dispatch(userPressedDeleteSession({sessionId}))
    }, [dispatch])

    const RenderItem = useCallback(({item}: { item: Session }) => (
        <TouchableOpacity key={item.sessionId} onPress={onSessionSelected(item)}
                          style={styles.sessionItemStyle}>
            <View style={styles.dataRow}>
                <View style={styles.itemColumnsContainer}>
                    <DataRowLabel style={styles.dataItemColumn} text={item.date}/>
                    <DataRowLabel text={`${item.animalNumber}`}/>
                </View>
                <View style={styles.itemControlsContainer}>
                    <IconButton size={30} onPress={onDeleteSessionPress(item.sessionId)} icon={'delete'}
                                type={'material'}
                                color={theme.colors?.error}/>
                </View>
            </View>

        </TouchableOpacity>
    ), [onSessionSelected, styles, theme])

    const onPressEditCompany = useCallback(() => {
        NavigationHandler.navigateToEditCompany(route.params.companyId);
    }, [route]);



    if (!company || !sessions) {
        return <PageLoader/>;
    }

    return (
        <>
            <AppBackground/>
            <View style={styles.mainContainer}>
                <View style={styles.topContainer}>
                    <View style={styles.titleContainer}>
                        <Image
                            height={80}
                            width={80}
                            source={require('../assets/images/farm_1.png')}
                        />
                        <View style={styles.titleAndInfoContainer}>
                            <ScreenTitle text={company.name}/>
                            <View style={styles.infoContainer}>
                                <Email email={company?.email} iconSize={15}/>
                                <PhoneNumber phone={company?.phone} iconSize={15} style={styles.phoneNumber}/>
                                <IconButton icon={'edit'} type={'material'} raised reverse onPress={onPressEditCompany}
                                            style={{margin: "auto"}}/>
                            </View>
                        </View>
                    </View>
                    <Text style={styles.listTitle}>Diario delle sessioni</Text>
                    <View style={styles.headerListRow}>
                        <HeaderListLabel text={"Data"} style={styles.dataHeader}/>
                        <Image height={40}
                               width={40}
                               source={require('../assets/images/cow.png')}/>
                    </View>
                    {(sessions && sessions.length) ? (
                        <FlatList
                            data={sessions}
                            renderItem={RenderItem}
                            keyExtractor={keyExtractor}
                        />) : (<Text style={styles.emptyListTitle}>Non è stata ancora creata alcuna sessione</Text>)
                    }
                </View>
                <Button onPress={onNewSessionPress} text={"Nuova sessione"}/>
                <DeleteSessionModal/>
            </View>
        </>
    );
}

export default CompanyDetailScreen
