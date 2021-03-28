import React from 'react';
import {Text} from "react-native-elements";
import {StyleSheet, TextStyle} from "react-native";
import {useTheme} from "../../../hooks/useTheme";

interface InputLabelProps {
    text: string;
    style?: TextStyle;
}

export const ScreenTitle = ({text, style}: InputLabelProps) => {

    const theme = useTheme();

    const styles = StyleSheet.create({
        title: {
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: 48,
            lineHeight: 56,
            color: `${theme.colors?.primaryText}`,
        },
    });


    return <Text style={[styles.title, style]} numberOfLines={1}>{text}</Text>
}


