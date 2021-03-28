import React from 'react';
import {Text} from "react-native-elements";
import {StyleSheet, TextStyle} from "react-native";
import {useTheme} from "../../../hooks/useTheme";

export interface InputLabelProps {
    text: string;
    style?: TextStyle;
}

export const InputLabel = ({text, style}: InputLabelProps) => {

    const theme = useTheme();

    const styles = StyleSheet.create({
        title: {
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: 24,
            lineHeight: 33,
            color: `${theme.colors?.primaryText}`
        },
    });


    return <Text style={[styles.title, style]}>{text}</Text>
}


