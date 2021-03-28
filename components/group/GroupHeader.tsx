import React from 'react'
import {StyleSheet, View} from "react-native";
import {FullTheme, Icon, Text, withTheme} from "react-native-elements";

interface GroupHeaderProps {
    hideLeft?: boolean;
    hideRight?: boolean;
    label: string;
    numberOfAnimals: number;
}

export const GroupHeader = withTheme<GroupHeaderProps>(({label, numberOfAnimals, hideLeft = false, hideRight = false, theme}) => {
    const styles = getStyles(theme);
    return (<View style={styles.TopContainer}>
        <View>
            {!hideLeft && <Icon
                name='arrow-left'
                type='font-awesome'
                color={theme.colors!.primary}
                size={32}
            />}
        </View>
        <Text style={styles.title}> Gruppo {label} ({numberOfAnimals}) </Text>
        <View>
            {!hideRight && <Icon
                name='arrow-right'
                type='font-awesome'
                color={theme.colors!.primary}
                size={32}
            />}
        </View>
    </View>);
});

const getStyles = (theme: Partial<FullTheme>) => StyleSheet.create({
    TopContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: theme.colors!.grey0,
        alignItems: 'center',
        padding: 10
    },
    title: {
        fontWeight: 'bold'
    }
});
