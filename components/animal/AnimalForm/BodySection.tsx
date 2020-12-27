import React from 'react'
import {Text, withTheme} from "react-native-elements";
import {StyleSheet, View} from "react-native";
import {UncontrolledSelect} from "../../ui/UncontrolledSelect";
import {cureItems, diseaseItems} from "../../../utils/selectItems";

interface BodySectionProps {
    title: string;
    diseaseName: string;
    cureName: string;
}

export const BodySection = withTheme<BodySectionProps>(({cureName, diseaseName, title, theme}) => {
    return <View>
        <Text style={styles.bodySectionLabel}>
            {title}
        </Text>
        <View style={styles.bodySectionSelectRow}>
            <UncontrolledSelect items={diseaseItems} placeholder={"Seleziona"} name={diseaseName}
                                label={'Malattia'} style={{marginRight: 30}}/>
            <UncontrolledSelect items={cureItems} placeholder={"Seleziona"} name={cureName}
                                label={'Medicazione'}/>
        </View>
    </View>
})

const styles = StyleSheet.create({
    bodySectionLabel: {
        fontSize: 14,
        marginBottom: 15,
    },
    bodySectionSelectRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});
