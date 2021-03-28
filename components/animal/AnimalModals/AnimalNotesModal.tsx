import React from 'react';
import {ModalHeader} from "../../ui/Modal/ModalHeader";
import {ModalBody} from "../../ui/Modal/ModalBody";
import {withTheme} from "react-native-elements";
import {useAnimalModals} from "../../../hooks/useAnimalModals";
import {FormProvider, useForm} from "react-hook-form";
import {ModalFooter} from "../../ui/Modal/ModalFooter";
import {CancelModalFooterButton} from "../../ui/Modal/CancelModalFooterButton";
import {SubmitModalFooterButton} from "../../ui/Modal/SubmitModalButton";
import {UncontrolledInput} from "../../ui/input/UncontrolledInput";

const Component = () => {
    const {animal, closeModal, loading, editNotes} = useAnimalModals();
    const methods = useForm<{ notes?: string }>({
        mode: "onSubmit",
        defaultValues: {
            notes: animal?.notes,
        }
    });
    return (<>
        <ModalHeader title={"Note"} onClose={closeModal}/>
        <ModalBody style={{width: 500, paddingTop: 30}}>
            <FormProvider {...methods} >
                <UncontrolledInput name={"notes"} multiline/>
            </FormProvider>
        </ModalBody>
        <ModalFooter>
            <CancelModalFooterButton title={"Chiudi"} onClose={closeModal} disabled={loading}/>
            <SubmitModalFooterButton onSubmit={methods.handleSubmit(editNotes)} title={"Salva"}
                                     loading={loading}/>
        </ModalFooter>
    </>)
}

export const AnimalNotesModal = withTheme(Component);

