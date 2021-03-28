import React from 'react';
import {Text} from "react-native-elements";
import {StyleSheet, TextStyle} from "react-native";
import {useTheme} from "../../../hooks/useTheme";

export interface DataRowLabelProps {
    text: string;
    style?: TextStyle;
}

export const DataRowLabel = ({text, style}: DataRowLabelProps) => {

    const theme = useTheme();

    const styles = StyleSheet.create({
        title: {
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: 20,
            lineHeight: 22,
            color: `${theme.colors?.primaryText}`
        },
    });


    return <Text style={[styles.title, style]}>{text}</Text>
}


