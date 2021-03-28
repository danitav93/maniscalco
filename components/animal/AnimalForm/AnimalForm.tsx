import React from "react";
import {StyleSheet, View} from "react-native";
import {withTheme} from 'react-native-elements';
import {UncontrolledInput} from "../../ui/UncontrolledInput";
import {BodySection} from "./BodySection";
import ViewPager from "@react-native-community/viewpager";

const bodySections = [{title: "Anteriore Sinistra", cureName: "frontLeftCure", diseaseName: "frontLeftDisease"},
    {title: "Anteriore Destra", cureName: "frontRightCure", diseaseName: "frontRightDisease"},
    {title: "Posteriore Sinistra", cureName: "rearLeftCure", diseaseName: "rearLeftDisease"},
    {title: "Posteriore destra", cureName: "rearRightCure", diseaseName: "rearRightDisease"}
]

export const AnimalForm = withTheme(({theme}) => {


    return (<View style={styles.TopContainer}>
        <UncontrolledInput
            placeholder='Etichetta'
            name="label"
        />
        <ViewPager style={styles.viewPager} initialPage={0}>
            {bodySections.map((section) => (
                <View key={section.title}>
                    <BodySection title={section.title} cureName={section.cureName} diseaseName={section.diseaseName}/>
                </View>
            ))}
        </ViewPager>
    </View>)
});


const styles = StyleSheet.create({
    TopContainer: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "stretch",
    },
    bodySectionLabel: {
        fontSize: 14,
        marginBottom: 15,
    },
    bodySectionSelectRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    viewPager: {
        flex: 1,
        marginTop: 30,
    },
});
