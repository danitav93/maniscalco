import React from "react";
import {Icon, Text, withTheme} from "react-native-elements";
import {StyleSheet, View} from "react-native";
interface EmailProps {
    email?: string;
    iconSize?: number
}
export const Email = withTheme<EmailProps>(({email, iconSize= 20, theme}) => {
    if (!email) {
        return null;
    }
    return (<View style={styles.TopContainer}>

        <Icon
            reverse
            name='envelope'
            type='font-awesome'
            color={theme.colors!.primary}
            size={iconSize}
        />
        <Text>{email}</Text>
    </View>);
});

const styles = StyleSheet.create({
    TopContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
});
