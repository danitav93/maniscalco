import React from "react";
import {Image, StyleSheet, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {useTheme} from "../../hooks/useTheme";

export const AppBackground = () => {

    const theme = useTheme();
    return (
        <>
        <LinearGradient
            colors={[`rgba(0, 10, 18, 0.31)`, `${theme.colors?.white}`]}
            style={styles.background}
        />
        <View style={styles.TopContainer}>
            <Image
                source={require('../../assets/images/logo.png')}
                style={styles.logo}/>
        </View>
        </>
    );
}


const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    TopContainer: {
        position: 'absolute',
        display: 'flex',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        opacity: 0.1,
    }
});
