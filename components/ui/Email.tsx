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
    return (<View style={styles.container}>

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
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
});
