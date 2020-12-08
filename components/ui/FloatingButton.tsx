import {KeyboardAvoidingView, StyleSheet} from "react-native";
import {Button, Icon, withTheme} from "react-native-elements";
import React from "react";

interface FloatingButtonProps {
    onPress: () => void,
    text?: string;
}

const Component = ({onPress, text}: FloatingButtonProps) => {
    return (<KeyboardAvoidingView behavior={'position'} style={styles.buttonStyle}>
        <Button
            title={text}
            titleStyle={{fontSize: 16}}
            onPress={onPress}
        />
    </KeyboardAvoidingView>)
}
const styles = StyleSheet.create({
    buttonStyle: {
        position: 'absolute',
        bottom: 20,
        right: 20,
    }
});

export const FloatingCreateButton = withTheme(Component);
