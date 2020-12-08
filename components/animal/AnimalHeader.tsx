import React from 'react'
import {StyleSheet, View} from "react-native";
import {Text, withTheme} from "react-native-elements";

const Component = ({theme}) => {
    const styles = getStyles(theme);


    return (<View style={styles.container}>
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
};

const getStyles = (theme) => StyleSheet.create({
    container: {
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

export const AnimalHeader = withTheme(Component);
