import {Button as LibButton, Icon, withTheme} from "react-native-elements";
import React from "react";
import {theme} from "../../constants/Theme";
import {StyleSheet, ViewStyle} from "react-native";

interface IconButtonProps {
    onPress: () => void,
    disabled?: boolean;
    icon: string;
    type: string;
    size?: number;
    color?: string;
    style?: ViewStyle;
    reverse?: boolean;
    raised?: boolean;
}

export const IconButton = withTheme((props: IconButtonProps) => {
    return (
        <LibButton
            onPress={props.onPress}
            containerStyle={[styles.containerStyle, props.style]}
            disabled={props.disabled}
            type={"clear"}
            icon={<Icon
                name={props.icon}
                type={props.type}
                color={props.color ?? theme.colors!.primary}
                size={props.size ?? 20}
                reverse={props.raised}
                raised={props.raised}
            />}
        />
    )
});
const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: 'transparent',
    },
    buttonStyle: {
        height: 58,
        borderRadius: 8,
    }
});
