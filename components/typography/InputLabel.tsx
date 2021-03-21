import React from 'react';
import {Text} from "react-native-elements";
import {StyleSheet, TextStyle} from "react-native";
import {useTheme} from "../../hooks/useTheme";

interface InputLabelProps {
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
            fontSize: 28,
            lineHeight: 33,
            color: `${theme.colors?.secondaryText}`
        },
    });


    return <Text style={[styles.title, style]}>{text}</Text>
}


