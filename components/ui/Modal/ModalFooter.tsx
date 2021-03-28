import React from "react";
import {StyleSheet, View, ViewStyle} from "react-native";
import {withTheme} from "react-native-elements";

export interface ModalFooterProps {
    style?: ViewStyle;
}

export const ModalFooter = withTheme<ModalFooterProps>(({style, theme, children}) => {
    return (
        <View style={[styles.TopContainer, style]}>
            {children}
        </View>)
});

const styles = StyleSheet.create({
    TopContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
});
