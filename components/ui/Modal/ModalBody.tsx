import React, {FC} from "react";
import {StyleSheet, View, ViewStyle} from "react-native";

interface ModalBodyProps {
    style?: ViewStyle;
}

export const ModalBody: FC<ModalBodyProps> = ({style = {}, children}) => {

    return (
        <View style={{...styles.container,...style}}>
            {children}
        </View>);

}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
    },
});
