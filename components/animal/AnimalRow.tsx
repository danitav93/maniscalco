import React from 'react'
import {StyleSheet, View} from "react-native";
import {FullTheme, Icon, Text, withTheme} from "react-native-elements";
import {Animal} from "../../dbApi";
import {CureAndDiseaseColumn} from "./CureAndDiseaseColumn";
import {useAnimalModals} from "../../hooks/useAnimalModals";
import {useEditAnimal} from "../../hooks/useEditAnimal";
import {AnimalsModal} from "../../redux/reducers/animal.reducer";

interface AnimalRowProps {
    animal: Animal;
    groupId: string;
}

export const AnimalRow = withTheme<AnimalRowProps>(({animal, groupId, theme}) => {
    const styles = getStyles(theme);

    const {openModal} = useAnimalModals();

    const {navigateToEditAnimal} = useEditAnimal();

    return (<View style={styles.TopContainer}>
        <Text style={{...styles.rowLabel, flex: 1}}>
            {animal.label}
        </Text>
        <CureAndDiseaseColumn cure={animal.frontLeftCure} disease={animal.frontLeftDisease}/>
        <CureAndDiseaseColumn cure={animal.frontRightCure} disease={animal.frontRightDisease}/>
        <CureAndDiseaseColumn cure={animal.rearLeftCure} disease={animal.rearLeftDisease}/>
        <CureAndDiseaseColumn cure={animal.rearRightCure} disease={animal.rearRightDisease}/>
        <View style={{flex: 1}}>
            <Icon
                reverse
                name='sticky-note'
                type='font-awesome'
                color={theme.colors!.grey0}
                size={10}
                onPress={openModal(AnimalsModal.ANIMAL_NOTE, animal, groupId)}
            />
        </View>
        <View style={styles.actionsContainer}>
            <Icon
                reverse
                name='edit'
                type='font-awesome'
                color={theme.colors!.primary}
                size={10}
                onPress={navigateToEditAnimal(animal, groupId)}
            />
            <Icon
                reverse
                name='trash'
                type='font-awesome'
                color={theme.colors!.error}
                size={10}
                onPress={openModal(AnimalsModal.DELETE_ANIMAL, animal, groupId)}
            />
        </View>
    </View>);
});

const getStyles = (_theme: Partial<FullTheme>) => StyleSheet.create({
    TopContainer: {
        width: '100%',
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        height: 60,
    },
    rowLabel: {},
    actionsContainer: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
    }
});
