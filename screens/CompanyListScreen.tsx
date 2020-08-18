import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import { useState } from "react";
import {Company, db} from "../dbApi";
import Autocomplete from 'react-autocomplete';


export default function CompanyListScreen() {

    const [selectedCompany, setSelectedCompany] = useState<Company | undefined>();
    const [filteredOptions, setFilteredOptions] = useState<Company[]>([]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Viva la maionese</Text>
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
