import React from "react";
import {StyleSheet} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {useTheme} from "../../hooks/useTheme";

export const AppBackground = () => {

    const theme = useTheme();
    return (
        <LinearGradient
            colors={[`${theme.colors?.primaryLight}`, `${theme.colors?.white}`]}
            style={styles.background}
        />
    );
}


const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 800,
    },
});
