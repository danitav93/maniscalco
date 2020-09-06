import React, {FC} from "react";
import {Overlay} from "react-native-elements";
import {StyleSheet, Text, View} from "react-native";

interface Props {
    isOpen: boolean;
}

export const Modal: FC<Props> = ({isOpen, children}) => {

    return (
        <Overlay isVisible={isOpen} overlayStyle={styles.overlay}>
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