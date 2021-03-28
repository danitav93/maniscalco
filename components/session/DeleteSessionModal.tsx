import React from 'react';
import {useDeleteSession} from "../../hooks/useDeleteSession";
import {CancelModalFooterButton} from "../ui/Modal/CancelModalFooterButton";
import {Modal} from "../ui/Modal/Modal";
import {ModalBody} from "../ui/Modal/ModalBody";
import {ModalFooter} from "../ui/Modal/ModalFooter";
import {SubmitModalFooterButton} from "../ui/Modal/SubmitModalButton";
import {Icon} from "react-native-elements";
import {useTheme} from "../../hooks/useTheme";
import {StyleSheet} from "react-native";
import {ModalDescription} from "../ui/typography/ModalDescription";

export const DeleteSessionModal = () => {

    const {deleteSession, loading, isOpen, closeModal} = useDeleteSession();

    const theme = useTheme();

    return (<Modal isOpen={isOpen}>
        <ModalBody>
            <Icon
                name='exclamation-triangle'
                type='font-awesome'
                color={theme.colors!.warning}
                size={60}
            />
            <ModalDescription text={"Sei sicuro di voler eliminare la sessione?"} style={styles.description}/>

        </ModalBody>
        <ModalFooter style={styles.footer}>
            <SubmitModalFooterButton title={"Elimina"} color={theme.colors?.error} onSubmit={deleteSession}
                                     loading={loading}/>
            <CancelModalFooterButton onClose={closeModal} disabled={loading}/>
        </ModalFooter>
    </Modal>)


}

const styles = StyleSheet.create({
    footer: {
        marginTop: 60,
    },
    description: {
        marginTop: 30
    }
});

