import React, {FC} from "react";
import {StyleSheet, View} from "react-native";


export const ModalBody: FC = ({children}) => {

    return (
        <View style={styles.container}>
            {children}
        </View>);

}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        paddingTop: 30,
        paddingBottom: 30
    },
});
