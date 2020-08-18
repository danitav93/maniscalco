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
            <Text style={styles.title}>Aziende</Text>
            <Autocomplete
                inputProps={{ id: 'states-autocomplete' }}
                wrapperStyle={{ position: 'relative', display: 'inline-block' }}
                value={selectedCompany}
                items={filteredOptions}
                getItemValue={(item) => item.name}
                onSelect={(value, item) => {
                    setSelectedCompany(item);
                    //todo: navigate to company details
                }}
                onChange={(event, value) => {
                    setFilteredOptions(db.getCompaniesBySearchFilter(value))
                }}
                renderMenu={children => (
                    <div className="menu">
                        {children}
                    </div>
                )}
                renderItem={(item, isHighlighted) => (
                    <div
                        className={`item ${isHighlighted ? 'item-highlighted' : ''}`}
                        key={item.abbr}
                    >{item.name}</div>
                )}
            />
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
