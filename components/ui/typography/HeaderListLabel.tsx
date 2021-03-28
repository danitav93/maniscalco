import React from 'react';
import {Text} from "react-native-elements";
import {StyleSheet, TextStyle} from "react-native";
import {useTheme} from "../../../hooks/useTheme";

export interface HeaderListLabelProps {
    text: string;
    style?: TextStyle;
}

export const HeaderListLabel = ({text, style}: HeaderListLabelProps) => {

    const theme = useTheme();

    const styles = StyleSheet.create({
        title: {
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: 22,
            lineHeight: 24,
            color: `${theme.colors?.primaryText}`
        },
    });


    return <Text style={[styles.title, style]}>{text}</Text>
}


