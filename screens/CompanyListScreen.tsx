import {KeyboardAvoidingView, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {FC, useCallback, useMemo, useState} from "react";
import {Company} from "../dbApi";
import {ReduxState} from "../redux/reducer";
import {useDispatch, useSelector} from "react-redux";
import {useNavigation} from '@react-navigation/native';
import {Button, Card, Icon, ListItem, Text, withTheme} from 'react-native-elements';
import {Autocomplete} from "../components/ui/Autocomplete";
import CreateCompanyForm from "../components/company/CreateCompanyForm";
import {Modal} from "../components/ui/Modal/Modal";
import {ModalHeader} from "../components/ui/Modal/ModalHeader";
import {ModalBody} from "../components/ui/Modal/ModalBody";
import {CancelModalFooterButton} from "../components/ui/Modal/CancelModalFooterButton";
import {SubmitModalFooterButton} from "../components/ui/Modal/SubmitModalButton";
import {useModal} from "../hooks/useModal";
import {FormProvider, useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers';
import {companySchema} from "../schemas/company";
import {userChangedSearchCompanyFilter, userSubmittedNewCompany} from "../redux/events";
import ModalFooter from "../components/ui/Modal/ModalFooter";


const filteredCompaniesSelector = (state: ReduxState) => state.companies.filteredCompanies;


const CompanyListScreen: FC = (props) => {


    const [selectedCompany, setSelectedCompany] = useState<Company | undefined>();

    const [query, setQuery] = useState<string | undefined>();

    const filteredCompanies: Company[] = useSelector(filteredCompaniesSelector);

    const itemsToShow = useMemo(() => (!!selectedCompany || !query) ? [] : filteredCompanies, [selectedCompany, query, filteredCompanies])

    const dispatch = useDispatch();

    const navigation = useNavigation();

    const onItemSelected = useCallback((item: Company) => () => {
        setSelectedCompany(item);
        setQuery(item.name);
    }, []);
    const onSearchStringChanged = useCallback((value: string) => {
        setQuery(value);
        setSelectedCompany(undefined);
        dispatch(userChangedSearchCompanyFilter(value));
    }, []);
    const goToCompanyDetail = useCallback(() => {
        navigation.navigate('CompanyDetails');
    }, [selectedCompany])

    const RenderItem = useCallback(({item}: { item: Company }) => (
        <TouchableOpacity onPress={onItemSelected(item)}>
            <ListItem key={item.companyId} bottomDivider>
                <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                    <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        </TouchableOpacity>
    ), [onItemSelected])


    const {
        isModalOpen, closeModal, openModal
    } = useModal();

    const methods = useForm({
        mode: "onSubmit",
        resolver: yupResolver(companySchema),
    });

    const createCompany = useCallback((data) => {
        dispatch(userSubmittedNewCompany(data))
    }, [dispatch])


    return (
        <>
            <View style={styles.container}>
                <Autocomplete
                    data={itemsToShow}
                    onChangeText={onSearchStringChanged}
                    renderItem={RenderItem}
                    value={query}
                    placeholder={"Cerca una azienda"}
                />
                {selectedCompany && (
                    <>
                        <Card wrapperStyle={styles.resumeContainer}>
                            <View>
                                <Card.Title>{selectedCompany.name}</Card.Title>
                                <Card.Divider/>
                            </View>
                            <Text>Email: {selectedCompany.email ?? ''}</Text>
                            <Text>Telefono: {selectedCompany.phoneNumber ?? ''}</Text>
                            <Button title={"Vai al dettaglio"} onPress={goToCompanyDetail}/>
                        </Card>
                    </>
                )}
                <KeyboardAvoidingView behavior={'position'} style={styles.createButtonStyle}>
                    <Icon
                        raised
                        name='plus'
                        type='font-awesome'
                        onPress={openModal}
                        color={props.theme.colors.primary}
                        size={35}/>
                </KeyboardAvoidingView>
            </View>
            <Modal isOpen={isModalOpen}>
                <ModalHeader title={"Aggiungi una nuova azienda"}/>
                <ModalBody>
                    <FormProvider {...methods} >
                        <CreateCompanyForm/>
                    </FormProvider>
                </ModalBody>
                <ModalFooter>
                    <CancelModalFooterButton onClose={closeModal}/>
                    <SubmitModalFooterButton onSubmit={methods.handleSubmit(createCompany)}/>
                </ModalFooter>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        padding: 20,
    },
    resumeContainer: {
        height: 230,
        display: 'flex',
        justifyContent: 'space-between',
    },
    createButtonStyle: {
        position: 'absolute',
        bottom: 20,
        right: 20,
    }
});

export default withTheme(CompanyListScreen);
