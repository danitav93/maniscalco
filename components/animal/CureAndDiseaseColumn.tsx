import React from 'react'
import {StyleSheet, View} from "react-native";
import {Text, withTheme} from "react-native-elements";
import {Cure, Disease} from "../../dbApi";
import {emptyValue} from "../../utils/formatEmptyValue";

interface CureAndIllnessColumnProps {
    disease: Disease | null;
    cure: Cure | null;
}

const DiseaseStringMap: { [key in Disease]: string } = {
    [Disease.DERMATITE_DIGITALE]: 'Derm. digitale',
    [Disease.DERMATITE_INTERFIGITALE]: 'Derm. interfigitale',
    [Disease.FLEMMONE_INTERDIGITALE]: 'Derm. interdigitale',
    [Disease.LAMINITE]: 'Laminite',
    [Disease.ULCERA_SOLEARE]: 'Ulcera soleare'
}

const CureStringMap: { [key in Cure]: string } = {
    [Cure.FASCIATURA]: 'Fasciatura',
}

const Component = ({theme, disease, cure}: CureAndIllnessColumnProps) => {
    const styles = getStyles(theme);
    return (<View style={styles.container}>
        <Text style={{...styles.diseaseText, flex: 1}}>
            {disease!=null ? DiseaseStringMap[disease] : emptyValue}
        </Text>
        { cure!=null && (<Text style={{...styles.cureText, flex: 1}}>
            {CureStringMap[cure]}
        </Text>)}
    </View>);
};

const getStyles = (theme) => StyleSheet.create({
    container: {
        flex: 2,
        display: 'flex',
    },
    diseaseText: {
        fontSize: 14
    },
    cureText: {
        fontSize: 12,
        color: theme.colors.grey2
    }
});

export const CureAndDiseaseColumn = withTheme(Component);
