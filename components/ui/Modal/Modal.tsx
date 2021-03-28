import React, {FC} from "react";
import {Overlay} from "react-native-elements";
import {StyleSheet} from "react-native";
import {useModal} from "../../../hooks/useModal";

interface Props {
    isOpen?: boolean;
}

export const Modal: FC<Props> = ({isOpen, children}) => {

    useModal();

    return (
        <Overlay isVisible={!!isOpen} overlayStyle={styles.overlay}>
            <>
            {children}
            </>
        </Overlay>);

}

const styles = StyleSheet.create({
    overlay: {
        borderRadius: 10,
        padding: 30,
        display: 'flex',
        margin: 30
    },
});
