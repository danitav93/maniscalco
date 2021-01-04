import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {FC, useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RouteProp, useRoute} from '@react-navigation/native';
import {Company, Session} from "../dbApi";
import {loadCompanyDetails} from "../redux/events";
import {ListItem, Text} from 'react-native-elements';
import {PageLoader} from "../components/ui/PageLoader";
import {Email} from "../components/ui/Email";
import {PhoneNumber} from "../components/ui/PhoneNumber";
import {RootStackParamList} from "../constants/Screens";
import {NavigationHandler} from "../navigation/NavigationService";
import {FloatingCreateButton} from "../components/ui/FloatingButton";
import {Modal} from "../components/ui/Modal/Modal";
import {ModalHeader} from "../components/ui/Modal/ModalHeader";
import {ModalBody} from "../components/ui/Modal/ModalBody";
import {FormProvider, useForm} from "react-hook-form";
import {CancelModalFooterButton} from "../components/ui/Modal/CancelModalFooterButton";
import {SubmitModalFooterButton} from "../components/ui/Modal/SubmitModalButton";
import {yupResolver} from "@hookform/resolvers";
import {sessionSchema} from "../schemas/company";
import {useCreateSession} from "../hooks/useCreateSession";
import {ModalFooter} from "../components/ui/Modal/ModalFooter";
import {CreateSessionForm} from "../components/session/CreateSessionForm";
import {clearCompanyDetails} from "../redux/actions";
import {companyDetailSelector, companySessionsSelector} from "../redux/selectors/company.selector";


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

    const RenderItem = useCallback(({item}: { item: Session }) => (
        <TouchableOpacity key={item.sessionId} onPress={onSessionSelected(item)}>
            <ListItem style={{padding: StyleSheet.hairlineWidth}} bottomDivider>
                <ListItem.Content>
                    <ListItem.Title>{item.date}</ListItem.Title>
                </ListItem.Content>
            </ListItem>
        </TouchableOpacity>
    ), [onSessionSelected])

    const keyExtractor = (item: Session) => item.sessionId

    const {
        isModalOpen, closeModal, openModal, isCreatingSession, createSession
    } = useCreateSession();

    const methods = useForm({
        mode: "onSubmit",
        resolver: yupResolver(sessionSchema),
    });




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
            <FloatingCreateButton onPress={openModal} text={"Nuova sessione"}/>
            <Modal isOpen={isModalOpen}>
                <ModalHeader title={"Crea una nuova sessione"}/>
                <ModalBody>
                    <FormProvider {...methods} >
                        <CreateSessionForm/>
                    </FormProvider>
                </ModalBody>
                <ModalFooter>
                    <CancelModalFooterButton onClose={closeModal} disabled={isCreatingSession}/>
                    <SubmitModalFooterButton onSubmit={methods.handleSubmit(createSession)} loading={isCreatingSession}/>
                </ModalFooter>
            </Modal>
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
