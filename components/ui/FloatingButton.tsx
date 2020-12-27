import {KeyboardAvoidingView, StyleSheet} from "react-native";
import {Button, withTheme} from "react-native-elements";
import React from "react";

interface FloatingButtonProps {
    onPress: () => void,
    text?: string;
}

export const FloatingCreateButton = withTheme(({onPress, text}: FloatingButtonProps) => {
    return (<KeyboardAvoidingView behavior={'position'} style={styles.buttonStyle}>
        <Button
            title={text}
            titleStyle={{fontSize: 16}}
            onPress={onPress}
        />
    </KeyboardAvoidingView>)
});
const styles = StyleSheet.create({
    buttonStyle: {
        position: 'absolute',
        bottom: 20,
        right: 20,
    }
});
