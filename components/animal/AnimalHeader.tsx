import React from 'react'
import {StyleSheet, View} from "react-native";
import {FullTheme, Text, withTheme} from "react-native-elements";

export const AnimalHeader = withTheme(({theme}) => {
    const styles = getStyles(theme);


    return (<View style={styles.TopContainer}>
        <Text style={{...styles.headerLabel, flex: 1}}>
            N°
        </Text>
        <Text style={{...styles.headerLabel, flex: 2}}>
            Anteriore sinistra
        </Text>
        <Text style={{...styles.headerLabel, flex: 2}}>
            Anteriore destra
        </Text>
        <Text style={{...styles.headerLabel, flex: 2}}>
            Posteriore sinistra
        </Text>
        <Text style={{...styles.headerLabel, flex: 2}}>
            Posteriore destra
        </Text>
        <Text style={{...styles.headerLabel, flex: 1}}>
            Note
        </Text>
        <Text style={{...styles.headerLabel, flex: 1}}>
        </Text>
    </View>);
});

const getStyles = (_theme: Partial<FullTheme>) => StyleSheet.create({
    TopContainer: {
        width: '100%',
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        alignContent: "center"
    },
    headerLabel: {
        fontWeight: 'bold',
    },
});
