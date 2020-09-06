import React, {FC} from "react";
import {Overlay} from "react-native-elements";
import {StyleSheet, Text, View} from "react-native";

interface Props {
    isOpen: boolean;
    onPressClose: () => void;
}

export const Modal: FC<Props> = ({isOpen, onPressClose, children}) => {

    return (
        <Overlay isVisible={isOpen} onBackdropPress={() => {
            onPressClose()
        }} overlayStyle={styles.overlay}>
            {children}
        </Overlay>);

}

const styles = StyleSheet.create({
    overlay: {
        borderRadius: 10,
        padding: 30,
        display: 'flex',
    },
});
