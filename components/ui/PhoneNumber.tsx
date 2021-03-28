import React from "react";
import {Icon, withTheme} from "react-native-elements";
import {StyleSheet, View, ViewStyle} from "react-native";
import {ScreenTitleSubInfo} from "./typography/ScreenTitleSubInfos";

interface PhoneNumberProps {
    phone?: string;
    iconSize?: number;
    style?: ViewStyle;
}

export const PhoneNumber = withTheme<PhoneNumberProps>(({style, phone, iconSize = 20, theme}) => {
    if (!phone) {
        return null;
    }
    return (<View style={[styles.topContainer, style]}>

        <Icon
            name='phone'
            type='font-awesome'
            color={theme.colors!.primary}
            size={iconSize}
        />
        <ScreenTitleSubInfo text={phone} style={styles.text}/>
    </View>);
});

const styles = StyleSheet.create({
    topContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {marginLeft: 10}
});
