import React from 'react'
import {FlatList, StyleSheet, View} from "react-native";
import {Text, withTheme} from "react-native-elements";
import {Animal} from "../../dbApi";
import {AnimalHeader} from "../animal/AnimalHeader";
import {AnimalRow} from "../animal/AnimalRow";

interface GroupContentProps {
    animals: Animal[];
}

const Component = ({animals, theme}: GroupContentProps) => {
    const styles = getStyles(theme);

    if (!animals.length) {
        return (<View style={styles.emptyContainer}>
            <Text style={styles.emptyTitle}>
                Non ci sono animali in questo gruppo
            </Text>
        </View>)
    }

    const renderItem = ({item}: { item: Animal }) => (
        <AnimalRow animal={item}/>
    );

    return (<View style={styles.container}>
        <AnimalHeader/>
        <FlatList
            data={animals}
            renderItem={renderItem}
            keyExtractor={item => item.animalId}
        />
    </View>);
}

const getStyles = (theme) => StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        display: "flex",
        borderWidth: 1,
        borderColor: theme.colors.black,
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
        color: theme.colors.grey0
    }
});

export const GroupContent = withTheme(Component);
