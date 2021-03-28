import React from "react";
import {Button} from "react-native-elements";
import {StyleSheet} from "react-native";
import {useTheme} from "../../../hooks/useTheme";

interface Props {
    onSubmit: () => void;
    title?: string;
    color?: string;
    loading?: boolean;
    disabled?: boolean
}

export const SubmitModalFooterButton = ({title = "Crea", color, onSubmit, loading, disabled}: Props) => {

    const theme = useTheme();

    const styles = StyleSheet.create({
        buttonStyle: {
            color: color ?? theme.colors?.primary,
            width: 230,
            height: 50,
            borderRadius: 8,
        },
        containerStyle: {

        }
    });


    return (<Button
        title={title}
        onPress={onSubmit}
        buttonStyle={[styles.buttonStyle, {backgroundColor: color ?? theme.colors?.primary}]}
        raised
        containerStyle={styles.containerStyle}
        loading={loading}
        disabled={disabled}
    />)
};

