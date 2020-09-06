import React, {FC} from "react";
import {StyleSheet, View} from "react-native";


export const ModalFooter: FC = ({children}) => {

    return (
        <View style={styles.container}>
            {children}
        </View>);

}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "flex-end",
    },
});
