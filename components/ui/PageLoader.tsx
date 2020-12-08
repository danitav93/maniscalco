import React, {FC} from "react";
import {ActivityIndicator, StyleSheet, View} from "react-native";

export const PageLoader: FC = () => {
    return (<View style={styles.container}><ActivityIndicator/></View>)
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
})
