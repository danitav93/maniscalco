import React from 'react'
import {FlatList, StyleSheet, View} from "react-native";
import {FullTheme, Text, withTheme} from "react-native-elements";
import {Animal} from "../../dbApi";
import {AnimalHeader} from "../animal/AnimalHeader";
import {AnimalRow} from "../animal/AnimalRow";
import {AnimalModals} from "../animal/AnimalModals";

interface GroupContentProps {
    animals: Animal[];
    groupId: string;
}

export const GroupContent = withTheme<GroupContentProps>(({animals,groupId, theme}) => {
    const styles = getStyles(theme);

    if (!animals.length) {
        return (<View style={styles.emptyContainer}>
            <Text style={styles.emptyTitle}>
                Non ci sono animali in questo gruppo
            </Text>
        </View>)
    }

    const renderItem = ({item}: { item: Animal }) => (
        <AnimalRow key={item.animalId} animal={item} groupId={groupId}/>
    );

    return (<View style={styles.container}>
        <AnimalHeader/>
        <FlatList
            data={animals}
            renderItem={renderItem}
            keyExtractor={item => item.animalId}
        />
        <AnimalModals/>
    </View>);
});

const getStyles = (theme: Partial<FullTheme>) => StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        display: "flex",
        borderWidth: 1,
        borderColor: theme.colors!.grey1,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
    },
    title: {
        fontWeight: 'bold'
    },
    emptyContainer: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    emptyTitle: {
        color: theme.colors!.grey0
    }
});
