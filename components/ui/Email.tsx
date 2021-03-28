import React from "react";
import {Icon, withTheme} from "react-native-elements";
import {StyleSheet, View} from "react-native";
import {ScreenTitleSubInfo} from "./typography/ScreenTitleSubInfos";

interface EmailProps {
    email?: string;
    iconSize?: number
}

export const Email = withTheme<EmailProps>(({email, iconSize = 20, theme}) => {
    if (!email) {
        return null;
    }
    return (<View style={styles.TopContainer}>

        <Icon
            name='envelope'
            type='font-awesome'
            color={theme.colors!.primary}
            size={iconSize}
        />
        <ScreenTitleSubInfo text={email} style={{marginLeft: 10}}/>
    </View>);
});

const styles = StyleSheet.create({
    TopContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
});
