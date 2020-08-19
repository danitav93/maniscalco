import {Button, StyleSheet} from 'react-native';
import { Text, View } from '../components/Themed';
import React, {FC, useState} from "react";
import {Company, db} from "../dbApi";
import Autocomplete from 'react-autocomplete';
import {ReduxState} from "../redux/reducer";
import { useDispatch, useSelector} from "react-redux";
import {userPressedButton, userPressedButton2} from "../redux/action";

const exampleSelector = (state: ReduxState) => state.example;
const companiesSelector = (state: ReduxState) => state.companies;


const CompanyListScreen: FC = () => {

    const [selectedCompany, setSelectedCompany] = useState<Company | undefined>();
    const [filteredOptions, setFilteredOptions] = useState<Company[]>([]);

    const example = useSelector(exampleSelector);

    const companies: Company[] = useSelector(companiesSelector);

    console.log(companies)

    const dispatch = useDispatch();

    const onPressButton = () => {
        dispatch(userPressedButton());
    }

    const onPressButton2 = () => {
        dispatch(userPressedButton2());
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Viva la {example}</Text>
            <Button title={"Toccami"} onPress={onPressButton}/>
            <Button title={"Toccami2"} onPress={onPressButton2}/>
            <Text style={styles.title}>{companies.length}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default CompanyListScreen