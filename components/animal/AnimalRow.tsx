import React from 'react'
import {StyleSheet, View} from "react-native";
import {Icon, Text, withTheme} from "react-native-elements";
import {Animal} from "../../dbApi";
import {CureAndDiseaseColumn} from "./CureAndDiseaseColumn";

interface AnimalRowProps {
    animal: Animal;
}

const Component = ({animal, theme}: AnimalRowProps) => {
    const styles = getStyles(theme);

    return (<View style={styles.container}>
        <Text style={{...styles.rowLabel, flex: 1}}>
            {animal.label}
        </Text>
        <CureAndDiseaseColumn cure={animal.frontLeftCure} disease={animal.frontLeftDisease}/>
        <CureAndDiseaseColumn cure={animal.frontRightCure} disease={animal.frontRightDisease}/>
        <CureAndDiseaseColumn cure={animal.rearLeftCure} disease={animal.rearLeftDisease}/>
        <CureAndDiseaseColumn cure={animal.rearRightCure} disease={animal.rearRightDisease}/>
        <View style={{ flex: 1}}>
            <Icon
                reverse
                name='sticky-note'
                type='font-awesome'
                color={theme.colors.grey0}
                size={10}
            />
        </View>
        <View style={styles.actionsContainer}>
            <Icon
                reverse
                name='edit'
                type='font-awesome'
                color={theme.colors.primary}
                size={10}
            />
            <Icon
                reverse
                name='trash'
                type='font-awesome'
                color={theme.colors.error}
                size={10}
            />
        </View>
    </View>);
};

const getStyles = (theme) => StyleSheet.create({
    container: {
        width: '100%',
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        height: 60,
    },
    rowLabel: {},
    actionsContainer: {
        flex:1,
        display: "flex",
        flexDirection: "row",
    }
});

export const AnimalRow = withTheme(Component);
