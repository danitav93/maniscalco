import React from "react";
import {StyleSheet, View} from "react-native";
import { withTheme} from "react-native-elements";

export const ModalFooter = withTheme(({theme, children}) => {
    return (
        <View style={styles.container}>
                {children}
        </View>)
});

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
});
