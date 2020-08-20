import { Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';
import React, {FC, useCallback, useState} from "react";
import { Company } from "../dbApi";
import { ReduxState } from "../redux/reducer";
import { useDispatch, useSelector} from "react-redux";
import { userChangedSearchCompanyFilter } from "../redux/action";
import Autocomplete from "react-native-autocomplete-input";
import { useNavigation } from '@react-navigation/native';


const filteredCompaniesSelector = (state: ReduxState) => state.companies.filteredCompanies;


const Icon = () => <Text>fdsfds</Text>;

const actions = [
    {
        text: "Accessibility",
        icon: Icon,
        name: "bt_accessibility",
        position: 2
    },
];


const CompanyListScreen: FC = () => {

    const [selectedCompany, setSelectedCompany] = useState<Company | undefined>();

    const [query, setQuery] = useState<string | undefined>();

    const filteredCompanies: Company[] = useSelector(filteredCompaniesSelector);

    const dispatch = useDispatch();

    const navigation = useNavigation();

    const onItemSelected= useCallback((item: Company) => () => {
        setSelectedCompany(item);
        setQuery(item.name);
    },  []);
    const onSearchStringChanged= useCallback( value => {
        setQuery(value);
        setSelectedCompany(undefined);
        dispatch(userChangedSearchCompanyFilter(value));
    },  []);
    const goToCompanyDetail = useCallback(()=>{
        navigation.navigate('CompanyDetails');
    },[selectedCompany])

    const RenderItem = useCallback(({ item }: { item: Company }) => (
        <TouchableOpacity onPress={onItemSelected(item)}>
            <View style={styles.itemContainer}>
                <Text>{item.name}</Text>
            </View>
        </TouchableOpacity>
    ),[onItemSelected])

    return (
        <>
            <View style={styles.container}>
                <View style={styles.autocompleteContainer}>
                    <Text style={styles.title}>Cerca azienda</Text>
                    <Autocomplete
                        data={filteredCompanies}
                        onChangeText={onSearchStringChanged}
                        renderItem={RenderItem}
                        defaultValue={query}
                        hideResults={!!selectedCompany}
                    />
                </View>
                {selectedCompany && (<View style={styles.resumeContainer}>
                    <Text>Nome: {selectedCompany.name}</Text>
                    <Text>Email: {selectedCompany.email ?? ''}</Text>
                    <Text>Telefono: {selectedCompany.phoneNumber ?? ''}</Text>
                    <Button title={"Vai al dettaglio"} onPress={goToCompanyDetail}/>
                </View>)}

            </View>
            <TouchableOpacity onPress={goToCompanyDetail} style={styles.fab}>
                <Text style={styles.fabIcon}>+</Text>
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    autocompleteContainer: {
        paddingTop: 56,
        paddingLeft: 24,
        paddingRight: 24,
        position: 'absolute',
        zIndex: 1,
        left: 0,
        flex:1,
        right: 0,
        top: 0,
    },
    itemContainer: {
        display: 'flex',
        height: 40,
        justifyContent: 'center',
        paddingLeft: 5,
    },
    resumeContainer: {
        display: 'flex',
        paddingLeft: 24,
        position: 'absolute',
        top: 200,
    },
    fab: {
        position: 'absolute',
        width: 56,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        right: 20,
        bottom: 20,
        backgroundColor: '#03A9F4',
        borderRadius: 30,
        elevation: 8
    },
    fabIcon: {
        fontSize: 40,
        color: 'white'
    }
});

export default CompanyListScreen