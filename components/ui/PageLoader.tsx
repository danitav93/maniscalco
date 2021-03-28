import React, {FC} from "react";
import {ActivityIndicator, StyleSheet, View} from "react-native";

export const PageLoader: FC = () => {
    return (<View style={styles.TopContainer}><ActivityIndicator/></View>)
}

const styles = StyleSheet.create({
    TopContainer: {
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
})
