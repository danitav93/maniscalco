import {Button, StyleSheet} from 'react-native';
import { Text, View } from '../components/Themed';
import React, {FC, useState} from "react";
import {Company, db} from "../dbApi";
import Autocomplete from 'react-autocomplete';
import {ReduxState} from "../redux/reducer";
import {connect, useDispatch, useSelector} from "react-redux";
import {userPressedButtonAction} from "../redux/action";

const exampleSelector = (state: ReduxState) => state.example;

const CompanyListScreen: FC = () => {

    const [selectedCompany, setSelectedCompany] = useState<Company | undefined>();
    const [filteredOptions, setFilteredOptions] = useState<Company[]>([]);

    const example = useSelector(exampleSelector);

    const dispatch = useDispatch();

    const onPressButton = () => {
        dispatch(userPressedButtonAction());
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Viva la {example}</Text>
            <Button title={"Toccami"} onPress={onPressButton}/>
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