import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {FC, useCallback, useMemo, useState} from "react";
import {Company} from "../dbApi";
import {useDispatch, useSelector} from "react-redux";
import {Button, Card, ListItem} from 'react-native-elements';
import {Autocomplete} from "../components/ui/Autocomplete";
import {Modal} from "../components/ui/Modal/Modal";
import {ModalHeader} from "../components/ui/Modal/ModalHeader";
import {ModalBody} from "../components/ui/Modal/ModalBody";
import {CancelModalFooterButton} from "../components/ui/Modal/CancelModalFooterButton";
import {SubmitModalFooterButton} from "../components/ui/Modal/SubmitModalButton";
import {FormProvider, useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers';
import {companySchema} from "../schemas/company";
import {userChangedSearchCompanyFilter} from "../redux/events";
import {NavigationHandler} from "../navigation/NavigationService";
import {Email} from "../components/ui/Email";
import {PhoneNumber} from "../components/ui/PhoneNumber";
import {FloatingCreateButton} from "../components/ui/FloatingButton";
import {useCreateCompanyModal} from "../hooks/useCreateCompanyModal";
import {ModalFooter} from "../components/ui/Modal/ModalFooter";
import {CreateCompanyForm} from "../components/company/CreateCompanyForm";
import {filteredCompaniesSelector} from "../redux/selectors/company.selector";


export const CompanyListScreen: FC = () => {

    const [selectedCompany, setSelectedCompany] = useState<Company | undefined>();

    const [query, setQuery] = useState<string | undefined>();

    const filteredCompanies: Company[] = useSelector(filteredCompaniesSelector);

    const itemsToShow = useMemo(() => (!!selectedCompany || !query) ? [] : filteredCompanies, [selectedCompany, query, filteredCompanies])

    const dispatch = useDispatch();


    const onItemSelected = useCallback((item: Company) => () => {
        setSelectedCompany(item);
        setQuery(item.name);
    }, []);
    const onSearchStringChanged = useCallback((value: string) => {
        console.log(value);
        setQuery(value);
        setSelectedCompany(undefined);
        dispatch(userChangedSearchCompanyFilter(value));
    }, []);
    const goToCompanyDetail = useCallback(() => {
        if (selectedCompany) {
            NavigationHandler.navigateToCompanyDetails(selectedCompany.companyId)
        }
    }, [selectedCompany])

    const RenderItem = useCallback(({item}: { item: Company }) => (
        <TouchableOpacity onPress={onItemSelected(item)} key={item.companyId}>
            <ListItem key={item.companyId} bottomDivider>
                <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                    <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        </TouchableOpacity>
    ), [onItemSelected])


    const {
        isOpen, createCompany, closeModal, openModal, isLoading
    } = useCreateCompanyModal();

    const methods = useForm({
        mode: "onSubmit",
        resolver: yupResolver(companySchema),
    });


    return (
        <>
            <View style={styles.container}>
                <Autocomplete
                    data={itemsToShow}
                    onChangeText={onSearchStringChanged}
                    renderItem={RenderItem}
                    value={query}
                    placeholder={"Es: Azienda di Mario Rossi"}
                    keyExtractor={(company) => company.companyId}
                    label={"Cerca una azienda per nome"}
                    style={{height: 80, width: 664, alignSelf: 'center', marginTop: 50}}
                />
                {selectedCompany && (
                    <>
                        <Card wrapperStyle={styles.resumeContainer}>
                            <Card.Title>{selectedCompany.name}</Card.Title>
                            <Card.Divider/>
                            <Email email={selectedCompany.email}/>
                            <PhoneNumber phone={selectedCompany.phoneNumber}/>
                            <Button title={"Vai alla scheda"} onPress={goToCompanyDetail}/>
                        </Card>
                    </>
                )}
                <FloatingCreateButton onPress={openModal} text={"Aggiungi nuova azienda"}/>
            </View>
            <Modal isOpen={isOpen}>
                <ModalHeader title={"Aggiungi una nuova azienda"}/>
                <ModalBody>
                    <FormProvider {...methods} >
                        <CreateCompanyForm/>
                    </FormProvider>
                </ModalBody>
                <ModalFooter>
                    <CancelModalFooterButton onClose={closeModal} disabled={isLoading}/>
                    <SubmitModalFooterButton onSubmit={methods.handleSubmit(createCompany)} loading={isLoading}/>
                </ModalFooter>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
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
