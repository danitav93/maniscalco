import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useMemo, useState} from "react";
import {Company} from "../dbApi";
import {useDispatch, useSelector} from "react-redux";
import {userChangedSearchCompanyFilter} from "../redux/events";
import {NavigationHandler} from "../navigation/NavigationService";
import {Button} from "../components/ui/Button";
import {filteredCompaniesSelector} from "../redux/selectors/company.selector";
import {withTheme} from "react-native-elements";
import {AppBackground} from "../components/ui/AppBackground";
import {Autocomplete} from "../components/ui/input/Autocomplete";


const onNewCompanyClick = () => {
    NavigationHandler.navigateToNewCompany();
};

const goToCompanyDetail = (companyId: string) => () => {
    NavigationHandler.navigateToCompanyDetails(companyId)
};

export const CompanyListScreen = withTheme(({theme}) => {


    const [query, setQuery] = useState<string | undefined>();

    const filteredCompanies: Company[] = useSelector(filteredCompaniesSelector);

    const dispatch = useDispatch();


    const onSearchStringChanged = useCallback((value: string) => {
        setQuery(value);
        dispatch(userChangedSearchCompanyFilter(value));
    }, []);


    const RenderItem = useCallback(({item}: { item: Company }) => (
        <TouchableOpacity onPress={goToCompanyDetail(item.companyId)} key={item.companyId}
                          style={styles.companyItemStyle}>
            <Text style={{fontSize: 20}}>{item.name}</Text>
            <Text style={{color: theme.colors?.placeholder}}>{item.email} {item.phone}</Text>
        </TouchableOpacity>
    ), [goToCompanyDetail])

    const styles = useMemo(() => StyleSheet.create({
        TopContainer: {
            width: '100%',
            flex: 1,
            display: 'flex',
            padding: 20,
            justifyContent: 'space-between',
            alignItems: 'flex-end',
        },
        resumeContainer: {
            height: 230,
            display: 'flex',
            justifyContent: 'space-between',
        },
        companyItemStyle: {
            borderWidth: 1,
            borderColor: theme.colors?.primaryLight,
            borderRadius: 8,
            height: 60,
            marginTop: 10,
            backgroundColor: theme.colors?.secondaryLight,
            justifyContent: 'space-evenly',
            paddingLeft: 20,
            paddingTop: 10,
            paddingBottom: 10,
        }
    }), [theme]);

    return (
        <>
            <AppBackground/>
            <View style={styles.TopContainer}>
                <Autocomplete
                    data={filteredCompanies}
                    onChangeText={onSearchStringChanged}
                    renderItem={RenderItem}
                    value={query}
                    placeholder={"Es: Azienda di Mario Rossi"}
                    keyExtractor={(company) => company.companyId}
                    label={"Cerca una azienda per nome"}
                    inputStyle={{alignSelf: 'center', marginTop: 50}}
                />

                <Button onPress={onNewCompanyClick} text={"Aggiungi nuova azienda"}/>
            </View>
        </>
    );
});
