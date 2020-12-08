import React from 'react'
import {StyleSheet, View} from "react-native";
import {Icon, Text, withTheme} from "react-native-elements";

interface GroupHeaderProps {
    hideLeft?: boolean;
    hideRight?: boolean;
    label: string;
    numberOfAnimals: number;
}

const Component = ({label, numberOfAnimals, hideLeft = false, hideRight = false, theme}: GroupHeaderProps) => {
    const styles = getStyles(theme);
    return (<View style={styles.container}>
        <View>
            {!hideLeft && <Icon
                name='arrow-left'
                type='font-awesome'
                color={theme.colors.primary}
                size={32}
            />}
        </View>
        <Text style={styles.title}> Gruppo {label} ({numberOfAnimals}) </Text>
        <View>
            {!hideRight && <Icon
                name='arrow-right'
                type='font-awesome'
                color={theme.colors.primary}
                size={32}
            />}
        </View>
    </View>);
}

const getStyles = (theme) => StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: theme.colors.black,
        alignItems: 'center',
        padding: 10
    },
    title: {
        fontWeight: 'bold'
    }
});

export const GroupHeader = withTheme(Component);
