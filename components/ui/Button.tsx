import {StyleSheet} from "react-native";
import {Button as LibButton, withTheme} from "react-native-elements";
import React from "react";

interface FloatingButtonProps {
    onPress: () => void,
    text: string;
    isLoading?: boolean;
    disabled?: boolean;
}

export const Button = withTheme(({onPress, text, isLoading, disabled}: FloatingButtonProps) => {
    return (
        <LibButton
            title={text}
            onPress={onPress}
            buttonStyle={styles.buttonStyle}
            raised
            containerStyle={styles.containerStyle}
            loading={isLoading}
            disabled={disabled}
        />
    )
});
const styles = StyleSheet.create({
    containerStyle: {
        width: 318,
    },
    buttonStyle: {
        height: 58,
        borderRadius: 8,
    }
});
