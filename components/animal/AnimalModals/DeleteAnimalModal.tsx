import React from 'react'
import {Text, withTheme} from "react-native-elements";
import {ModalHeader} from "../../ui/Modal/ModalHeader";
import {ModalBody} from "../../ui/Modal/ModalBody";
import {useAnimalModals} from "../../../hooks/useAnimalModals";
import {CancelModalFooterButton} from "../../ui/Modal/CancelModalFooterButton";
import {SubmitModalFooterButton} from "../../ui/Modal/SubmitModalButton";
import { ModalFooter } from '../../ui/Modal/ModalFooter';

export const DeleteAnimalNote = withTheme(({theme}) => {

    const {animal, closeModal, deleteAnimal, loading} = useAnimalModals();

    return (
        <>
            <ModalHeader title={"Cancella animale"}/>
            <ModalBody style={{width: 200, paddingTop: 30, paddingBottom: 30}}>
                <Text>
                    Sei sicuro di voler cancellare l'animale {animal!.label}?
                </Text>
            </ModalBody>
            <ModalFooter>
                <CancelModalFooterButton onClose={closeModal} disabled={loading}/>
                <SubmitModalFooterButton onSubmit={deleteAnimal} title={"Elimina"} color={theme.colors!.error} loading={loading}/>
            </ModalFooter>
        </>
    )
});
