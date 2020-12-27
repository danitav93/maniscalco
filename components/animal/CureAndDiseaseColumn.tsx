import React from 'react'
import {StyleSheet, View} from "react-native";
import {FullTheme, Text, withTheme} from "react-native-elements";
import {Cure, Disease} from "../../dbApi";
import {emptyValue} from "../../utils/formatEmptyValue";
import {CureStringMap, DiseaseStringMap} from "../../utils/stringsMaps";

interface CureAndIllnessColumnProps {
    disease: Disease | null;
    cure: Cure | null;
}


export const CureAndDiseaseColumn = withTheme<CureAndIllnessColumnProps>(({theme, disease, cure}) => {
    const styles = getStyles(theme);
    return (<View style={styles.container}>
        <Text style={{...styles.diseaseText, flex: 1}}>
            {disease != null ? DiseaseStringMap[disease] : emptyValue}
        </Text>
        {cure != null && (<Text style={{...styles.cureText, flex: 1}}>
            {CureStringMap[cure]}
        </Text>)}
    </View>);
});

const getStyles = (theme: Partial<FullTheme>) => StyleSheet.create({
    container: {
        flex: 2,
        display: 'flex',
    },
    diseaseText: {
        fontSize: 14
    },
    cureText: {
        fontSize: 12,
        color: theme.colors!.grey2
    }
});
